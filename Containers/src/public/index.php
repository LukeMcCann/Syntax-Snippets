<?php declare(strict_types = 1);

/*
|--------------------------------------------------------------------------
| Front Controller
|--------------------------------------------------------------------------
|
| The Front Controller will handle all of our requests. 
| Our webserver should be configured to route all requests
| to this file. The Front Controller will then delegate
| requests to subsequent resources. First we define a 
| a constant to track the time our application started.
|
*/
define('APP_START', microtime(true));

/*
|--------------------------------------------------------------------------
| App Root
|--------------------------------------------------------------------------
|
| We will define a constant for our application root here. 
| This will ensure our file paths are consistent throughout
| the application. By declaring this here we can be sure that
| this will always be the root folder of our app. 
|
*/
define('APP_ROOT', dirname(__DIR__));

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader. 
| We will simply require this autoloader into the script here so we don't 
| need to worry about manually loading our classes later.
|
*/
require APP_ROOT.'/vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. This will allow us to handle all of 
| our clients requests, returning our responses.
|
*/
$app = require_once APP_ROOT.'/bootstrap/app.php';