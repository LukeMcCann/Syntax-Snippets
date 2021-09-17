<?php

class BaseContainer {
    
    private static $container = [];
    
    protected function bind($name, Callable $resolver) {
        static::$container[$name] = $resolver;
    }
    
    public static function make($name) {
        if (isset(static::$container[$name])) {
            $resolver = static::$container[$name];
            return resolver();
        }
        
        throw new Exception("Binding does not exist in container");
    }
}
