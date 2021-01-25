<?php 

    require_once 'Task.php';
    
    try {
        $pdo = new PDO('mysql:host=mysql;dbname=app_db', 'root', 'root');
    } catch(PDOException $e) {
        echo $e->getMessage();
        die();
    }

    $stmt = $pdo->prepare('SELECT * FROM tasks');
    $stmt->execute();

    $tasks = $stmt->fetchAll(PDO::FETCH_CLASS, 'Task');

    require_once 'index.view.php';