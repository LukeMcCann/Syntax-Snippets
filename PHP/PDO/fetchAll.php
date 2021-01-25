<?php

require_once 'index.view.php';

try {
    $pdo = new PDO('mysql:host=mysql;dbname=app_db', 'root', 'root');
} catch (PDOException $e) {
    echo $e->getMessage();
    die();
}

$stmt = $pdo->prepare('SELECT * FROM tasks');
$stmt->execute();

// var_dump($stmt->fetchAll()); // fetches default of arr and obj
var_dump($stmt->fetchAll(PDO::FETCH_OBJ));