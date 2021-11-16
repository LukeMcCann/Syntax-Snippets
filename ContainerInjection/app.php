<?php declare(strict_types = 1);

use DI\Container as DIContainer;

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we need to do is create our new Application instance.
| This serves a the "glue" for the library components we use, it is
| also the Service Container (IoC container) for binding all of the
| various parts of our system.
|
*/

return $app = new SiglaMeo\Foundation\Application(
    new DIContainer(),
    APP_ROOT ?? dirname(__DIR__)
);