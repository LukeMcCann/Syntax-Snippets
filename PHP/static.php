<?php 

class User {
    public $username;
    public static $minPassLength = 6;

    public static function validatePassword(string $password)
    {
        if (strlen($password) >= self::$minPassLength) {
            return true;
        } else {
            return false;
        }
    }
}

$password = 'pass';

if (User::validatePassword($password)) {
    echo 'Password is valid';
} else {
    echo 'Invalid Password';
}
