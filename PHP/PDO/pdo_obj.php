<?php 
    try {
        $host = "mysql";
        $user = "root";
        $pass = "root";
        $db = "app_db";
        $dsn = "mysql:host=$host;dbname=$db;";
        $options = [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ];
        $pdo = new PDO($dsn, $user, $pass, $options);
    } catch(PDOException $e) {
        print "Error: " . $e->getMessage() . "<br/>";
        die();
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <?php 
    
        $stmt = $pdo->prepare("SELECT * FROM test");
        $stmt->execute();
        $result = $stmt->fetchAll();

    ?>

    <ul>
        <?php
            foreach($result as $row) {
                echo "<li>" . $row->name . "</li>";
            }
        ?>
    </ul>

</body>
</html>
