<?php 

function testCallback($callback, $param) {
    if (!is_callable($callback)) {
        throw new BadMethodCallException("$callback is not a callable!");
    }
    
    return $callback($param);
}

function sayHello($name) {
    return "Hello $name";
}

echo sayHello('Luke');
