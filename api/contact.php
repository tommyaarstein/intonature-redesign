<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/config.php';

if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Contact form is not configured.']);
    exit;
}

$config = require $configPath;

function respond(int $statusCode, array $payload): never
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_text(string $value, int $maxLength): string
{
    $value = trim(str_replace(["\r", "\0"], '', $value));
    $value = preg_replace('/[ \t]+/', ' ', $value) ?? $value;

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

function header_text(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

function encoded_subject(string $subject): string
{
    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
}

if (clean_text((string)($_POST['website'] ?? ''), 120) !== '') {
    respond(200, ['success' => true]);
}

$name = clean_text((string)($_POST['name'] ?? ''), 160);
$email = clean_text((string)($_POST['email'] ?? ''), 254);
$country = clean_text((string)($_POST['country'] ?? ''), 120);
$preferredDates = clean_text((string)($_POST['preferred_dates'] ?? ''), 160);
$guests = (int)($_POST['guests'] ?? 0);
$message = clean_text((string)($_POST['message'] ?? ''), 2500);
$privacyAccepted = (string)($_POST['privacy_accepted'] ?? '') === 'yes';
$sourcePage = clean_text((string)($_POST['source_page'] ?? ''), 255);
$language = clean_text((string)($_POST['language'] ?? ''), 8);

$errors = [];

if ($name === '') $errors['name'] = 'Name is required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Valid email is required.';
if ($country === '') $errors['country'] = 'Country is required.';
if ($preferredDates === '') $errors['preferred_dates'] = 'Preferred dates are required.';
if ($guests < 1 || $guests > 50) $errors['guests'] = 'Number of guests must be between 1 and 50.';
if ($message === '' || text_length($message) > 2500) $errors['message'] = 'Message is required and must be 2500 characters or less.';
if (!$privacyAccepted) $errors['privacy_accepted'] = 'Privacy policy consent is required.';

if ($errors !== []) {
    respond(422, [
        'success' => false,
        'message' => 'Please check the form fields.',
        'errors' => $errors,
    ]);
}

$now = new DateTimeImmutable('now');
$retentionDays = max(1, (int)($config['retention_days'] ?? 730));
$retentionUntil = $now->modify('+' . $retentionDays . ' days');

try {
    $pdo = new PDO(
        (string)$config['database']['dsn'],
        (string)$config['database']['username'],
        (string)$config['database']['password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

    $pdo->prepare('DELETE FROM contact_submissions WHERE retention_until < NOW()')->execute();

    $statement = $pdo->prepare(
        'INSERT INTO contact_submissions
        (retention_until, name, email, country, preferred_dates, guests, message, privacy_accepted, privacy_accepted_at, source_page, language)
        VALUES
        (:retention_until, :name, :email, :country, :preferred_dates, :guests, :message, :privacy_accepted, :privacy_accepted_at, :source_page, :language)'
    );

    $statement->execute([
        ':retention_until' => $retentionUntil->format('Y-m-d H:i:s'),
        ':name' => $name,
        ':email' => $email,
        ':country' => $country,
        ':preferred_dates' => $preferredDates,
        ':guests' => $guests,
        ':message' => $message,
        ':privacy_accepted' => 1,
        ':privacy_accepted_at' => $now->format('Y-m-d H:i:s'),
        ':source_page' => $sourcePage !== '' ? $sourcePage : null,
        ':language' => $language !== '' ? $language : null,
    ]);

    $submissionId = (int)$pdo->lastInsertId();
} catch (Throwable $error) {
    error_log('Contact form database error: ' . $error->getMessage());
    respond(500, ['success' => false, 'message' => 'Could not save the message.']);
}

$mailConfig = $config['mail'] ?? [];
$to = (string)($mailConfig['to'] ?? '');
$from = (string)($mailConfig['from'] ?? '');
$fromName = header_text((string)($mailConfig['from_name'] ?? 'Into Nature website'));
$subjectPrefix = header_text((string)($mailConfig['subject_prefix'] ?? 'New contact request'));

if (!filter_var($to, FILTER_VALIDATE_EMAIL) || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
    respond(500, ['success' => false, 'message' => 'Email delivery is not configured.']);
}

$subject = $subjectPrefix . ' from ' . $name;
$body = implode("\n", [
    'New contact form submission',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Country: ' . $country,
    'Preferred dates: ' . $preferredDates,
    'Number of guests: ' . $guests,
    'Language: ' . ($language !== '' ? $language : 'not provided'),
    'Source page: ' . ($sourcePage !== '' ? $sourcePage : 'not provided'),
    '',
    'Message:',
    $message,
    '',
    'Privacy policy accepted: yes',
    'Accepted at: ' . $now->format(DateTimeInterface::ATOM),
    'Submission ID: ' . $submissionId,
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $fromName . ' <' . $from . '>',
    'Reply-To: ' . header_text($name) . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, encoded_subject($subject), $body, implode("\r\n", $headers), '-f' . $from);

if (!$sent) {
    $sent = mail($to, encoded_subject($subject), $body, implode("\r\n", $headers));
}

if ($sent) {
    $pdo->prepare('UPDATE contact_submissions SET email_sent = 1, email_sent_at = NOW() WHERE id = :id')
        ->execute([':id' => $submissionId]);

    respond(200, ['success' => true, 'message' => 'Message sent.']);
}

respond(500, ['success' => false, 'message' => 'Message was saved, but email delivery failed.']);
