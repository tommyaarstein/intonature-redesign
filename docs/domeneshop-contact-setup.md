# Domeneshop contact form setup

This site uses a small PHP endpoint for the contact form:

- `api/contact.php` receives the form.
- `api/cleanup.php` deletes expired submissions when called with a secret token.
- `database/contact_submissions.sql` creates the database table.
- `api/config.php` contains the real database and email credentials and must not be committed.
- `api/config.example.php` shows the config shape.

## 1. Webhosting requirement

The domain needs Domeneshop Web Standard or larger because the contact form needs both PHP and MySQL/MariaDB.

## 2. Create or confirm the email address

Create or confirm that `info@intonaturearctic.com` exists in Domeneshop.

The contact form should send from an address on the same Domeneshop webhosting/domain. Use `info@intonaturearctic.com` as the sender, and use the guest's email only as `Reply-To`.

## 3. Create the MySQL database

In Domeneshop:

1. Log in to Min konto.
2. Open Mine domener.
3. Select `intonaturearctic.com`.
4. Open the Webhotell tab.
5. Find MySQL and click Se på/endre.
6. Click Opprett ny database.
7. Save the database host, database name, username and password.

## 4. Import the database table

Use Domeneshop's database tool/phpMyAdmin or another MySQL client and import:

`database/contact_submissions.sql`

This creates the `contact_submissions` table.

## 5. Add server config

On the server, create:

`api/config.php`

Use `api/config.example.php` as the template and replace:

- `MYSQL_HOST`
- `MYSQL_DATABASE`
- `MYSQL_USERNAME`
- `MYSQL_PASSWORD`

Keep:

- `mail.to` as `info@intonaturearctic.com`
- `mail.from` as `info@intonaturearctic.com`
- `retention_days` as `730`, unless the client wants a shorter retention period
- `cleanup_token` as a long random secret

Do not commit `api/config.php`.

## 6. Upload files

Upload these folders/files to the webhotel:

- `api/contact.php`
- `api/cleanup.php`
- `api/.htaccess`
- `api/config.php`
- `database/contact_submissions.sql` only if you still need to import the table
- the normal site files: `index.html`, `faq.html`, `privacy.html`, `css/`, `js/`, `assets/`

After the table is imported, `database/contact_submissions.sql` does not need to be public on the website.

## 7. Test

1. Open `https://intonaturearctic.com/faq.html#contact`.
2. Submit a test message.
3. Confirm that the browser shows a success message.
4. Confirm that `info@intonaturearctic.com` receives the email.
5. Confirm that a row appears in `contact_submissions`.
6. Test cleanup in the browser with `https://intonaturearctic.com/api/cleanup.php?token=YOUR_SECRET_TOKEN`.

## Notes

- Old submissions are deleted automatically when a new successful form submission is saved.
- For guaranteed cleanup even during long periods without submissions, run `api/cleanup.php` daily using a server cron job or a trusted external cron monitor.
- The form stores the privacy consent timestamp together with the message.
