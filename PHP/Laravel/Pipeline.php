<?php 

// Copy this into a class that uses the Pipeline class. 
        $pipeline->send('Hello')
            ->through([
                function ($string, $next) {
                    $string = $string . ' World';
                    return $next($string);
                }
            ])
            ->then(function ($string) {
                dump($string);
            });
