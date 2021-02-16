<?php 

require '../database/Connection.php';

require '../database/QueryBuilder.php';

require '../Post.php';

$pdo = Connection::make();

$query = new QueryBuilder($pdo);

$posts = $query->selectAll('posts');

var_dump($posts);

