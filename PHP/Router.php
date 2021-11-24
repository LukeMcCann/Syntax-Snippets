<?php

class Router 
{
    private static $routes = [];

    public static function route($route, Callback $callback)
    {
        $route = trim($route, '/');
        self::$routes[$route] = $callback;
    }

    public static function dispatch($action) 
    {
        $action = trim($action, '/');
        $callback = self::$routes[$action];
    
        echo call_user_func($callback);
    }
}
