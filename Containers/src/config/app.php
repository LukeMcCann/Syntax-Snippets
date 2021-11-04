<?php declare(strict_types = 1);

// TODO: load from ENV

return [

    /*
     |--------------------------------------------------------------------------
     | Application Name
     |--------------------------------------------------------------------------
     |
     | This value is the name of your application. This value is used when the
     | framework needs to place the application's name in any location as required 
     | by the application or its packages.
     |
     */
 
     'name' => 'SiglaMeo',
     
    /*
     |--------------------------------------------------------------------------
     | Application Environment
     |--------------------------------------------------------------------------
     |
     | This value determines the "environment" your application is currently
     | running in.
     |
     */
 
     'env' => 'dev',
 
    /*
     |--------------------------------------------------------------------------
     | Application Debug Mode
     |--------------------------------------------------------------------------
     |
     | When in debug mode, detailed error messages with stack traces will be shown 
     | If disabled, a simple generic error page is shown.
     |
     */
 
     'debug' => (bool) true,
 
    /*
     |--------------------------------------------------------------------------
     | Application URL
     |--------------------------------------------------------------------------
     |
     | This URL of the application, used to find the URL root. 
     |
     */
 
     'url' => 'http://localhost:8080',
 
 
    /*
     |--------------------------------------------------------------------------
     | Application URL
     |--------------------------------------------------------------------------
     |
     | This URL of the application, used to find the URL root. 
     |
     */
 
     'app_root' => dirname(__DIR__),
     
    /*
     |--------------------------------------------------------------------------
     | Application Timezone
     |--------------------------------------------------------------------------
     |
     | The default timezone for the application.
     |
     */
 
     'timezone' => 'GMT',
 
    /*
     |--------------------------------------------------------------------------
     | Encryption Key
     |--------------------------------------------------------------------------
     |
     | This key is used by the Illuminate encrypter service and should be set
     | to a random, 32 character string, otherwise these encrypted strings
     | will not be safe. Please do this before deploying an application!
     |
     */
 
     'key' => '',
 
     'cipher' => 'AES-256-CBC',
 
    /*
     |--------------------------------------------------------------------------
     | Autoloaded Service Providers
     |--------------------------------------------------------------------------
     |
     | The service providers listed here will be automatically loaded on the
     | request to your application.
     |
     */
 
     'providers' => [],
 
    /*
     |--------------------------------------------------------------------------
     | Class Aliases
     |--------------------------------------------------------------------------
     |
     | This array of class aliases will be registered when this application
     | is started.
     |
     */
 
     'aliases' => []
];