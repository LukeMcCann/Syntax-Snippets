<?php 

function testCallback($callback, ...$params) {
    
    if (!is_callable($callback)) {
        throw new BadMethodCallException("$callback is not a callable!");
    }
    
    $responses = [];
    foreach ($params as $param) {
        $responses[] = $callback($param);
    }
    
    return $responses ?? [];
}

function youCalled($name) {
    return "You called: $name";
}

print_r(testCallback('youCalled', 'Martin', 'Alice', 'Luke', 'Darryl'));
