<?php

class ServiceContainer {
    
    private static $bindings = [];
    
    public function bind($key, $value) {
        static::$bindings[$key] = $value;
    }
    
    public function make($key) {
        if (isset(static::$bindings[$key])) {
            return static::$bindings[$key]();
        }
    }
    
    public function checkBindings() {
        return static::$bindings;
    }
}

$container = new ServiceContainer();

// $container->bind('example', 'example_value');

$container->bind('test', function () { 
    return 'Hello World';
});

$example = $container->make('test');

print_r($container->checkBindings());

echo $example;
