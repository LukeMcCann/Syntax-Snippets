<?php 

    require_once 'functions.php';

    require_once 'database/Connection.php';

    require_once 'database/QueryBuilder.php';

    require_once 'Task.php';

    $pdo = Connection::make();

    $query = new QueryBuilder($pdo);

    $tasks = $query->selectAll('tasks');

    if ($pdo) {
        echo 'Successfully connected to database... <br />';
    }

    require_once 'index.view.php';