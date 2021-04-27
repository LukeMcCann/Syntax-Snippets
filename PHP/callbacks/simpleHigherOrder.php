<?php 

function add($n) {
    return function ($a) use ($n) {
        return $a + $n;
    };
}

echo add(1)(2);
