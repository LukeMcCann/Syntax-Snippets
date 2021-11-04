<?php declare(strict_types = 1);

return [

    /*
     |--------------------------------------------------------------------------
     | Default Database Connection Name
     |--------------------------------------------------------------------------
     |
     | Specify the default database driver to use. 
     |
     */
 
     'default' => 'mysql',
 
    /*
     |--------------------------------------------------------------------------
     | Database Connections
     |--------------------------------------------------------------------------
     |
     | Here are each of the database connections setup for your application.
     | Feel free to configure your own if it is not listed.
     |
     */

     'connections' => [
         
         'mysql' => [
             'driver' => 'mysql',
             'host' => 'mysql',
             'port' => '3306',
             'username' => 'root',
             'password' => 'root'
         ],
 
         'postgres' => [
             'driver' => 'pgsql',
             'host' => 'postgres',
             'port' => '5432',
             'username' => 'root',
             'password' => 'root'
         ]
     ]
 ];