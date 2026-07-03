<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$configPath = __DIR__ . '/config.php';

function cleanup_respond(int $statusCode, array $payload): never
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if (!is_file($configPath)) {
    cleanup_respond(500, ['success' => false, 'message' => 'Cleanup is not configured.']);
}

$config = require $configPath;
$configuredToken = (string)($config['cleanup_token'] ?? '');
$requestToken = (string)($_GET['token'] ?? ($_SERVER['HTTP_X_CLEANUP_TOKEN'] ?? ''));

if ($configuredToken === '' || !hash_equals($configuredToken, $requestToken)) {
    cleanup_respond(403, ['success' => false, 'message' => 'Forbidden']);
}

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

    $statement = $pdo->prepare('DELETE FROM contact_submissions WHERE retention_until < NOW()');
    $statement->execute();

    cleanup_respond(200, [
        'success' => true,
        'deleted' => $statement->rowCount(),
    ]);
} catch (Throwable $error) {
    error_log('Contact form cleanup error: ' . $error->getMessage());
    cleanup_respond(500, ['success' => false, 'message' => 'Cleanup failed.']);
}
