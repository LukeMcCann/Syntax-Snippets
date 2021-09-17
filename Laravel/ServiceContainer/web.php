<?php 

Route::get('/' function () {
  
  $container = new \App\Container();

  $container->bind('example', function () {
    return new \App\Example();
  });
  
  $example = $container->resolve('example');

  ddd($container);
});
