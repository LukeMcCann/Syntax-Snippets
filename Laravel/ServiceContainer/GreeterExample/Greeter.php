<?php 

class Greeter {

    function sayHello() {
        return 'Hello';
    }
}

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
}

$serviceContainer = new ServiceContainer;

$serviceContainer->bind('greeter', function() {
    return new Greeter;
});


$greeter = $serviceContainer->make('greeter');

echo $greeter->sayHello();
