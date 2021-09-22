<?php

function pretty_print_arrays(...$arrays) {
    $prefix = "a";
    foreach ($arrays as $array) {
        echo $prefix . ": ";
        print_r($array);
        echo "\n";
        $prefix++;
    }
}
