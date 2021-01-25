<?php 

$query = require '../bootstrap.php';

require '../Post.php';

$posts = $query->selectAll('posts', 'Post');

// Alternative way of mapping
// $posts = array_map(function ($post) {
//     $p = new Post;

//     $p->description = $post['description'];
// }, $posts);

var_dump($posts);

