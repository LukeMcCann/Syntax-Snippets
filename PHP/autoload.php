<?php 

spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});

$foo = new Foo;
$bar = new Bar;

$foo->sayHello();
