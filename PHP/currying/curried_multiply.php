<?php
 
function curriedMultiply ($a) {
    return function ($b) use ($a) {
        return function ($c) use ($a, $b) {
            return $a * $b * $c;  
        };
    };
}

echo curriedMultiply(1)(2)(3);
