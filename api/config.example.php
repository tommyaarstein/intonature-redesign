<?php
return [
    'database' => [
        'dsn' => 'mysql:host=MYSQL_HOST;dbname=MYSQL_DATABASE;charset=utf8mb4',
        'username' => 'MYSQL_USERNAME',
        'password' => 'MYSQL_PASSWORD',
    ],
    'mail' => [
        'to' => 'info@intonaturearctic.com',
        'from' => 'info@intonaturearctic.com',
        'from_name' => 'Into Nature website',
        'subject_prefix' => 'New contact request',
    ],
    'retention_days' => 730,
    'cleanup_token' => 'CHANGE_THIS_TO_A_LONG_RANDOM_SECRET',
];
