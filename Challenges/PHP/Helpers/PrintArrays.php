<?php

function pretty_print_arrays(...$arrays) {
    $letter = "a";
    foreach ($arrays as $array) {
        echo $letter . ": ";
        print_r($array);
        echo "\n";
        $letter++;
    }
}
