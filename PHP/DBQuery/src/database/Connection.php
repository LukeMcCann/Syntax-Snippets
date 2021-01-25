<?php 

final class Connection 
{
    public static function make()
    {
        try {
            return new PDO('mysql:host=mysql;dbname=app_db', 'root', 'root');
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}