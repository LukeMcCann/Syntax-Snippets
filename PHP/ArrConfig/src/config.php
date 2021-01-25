<?php 

return [

    'database' => [
        
        'name' => 'app_db',

        'username' => 'root',

        'password' => 'root',

        'connection' => 'mysql:host=mysql',

        'options' => [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    ]
];