<?php

function sum(int|float ...$numbers) : int|float {
    return array_sum($numbers);
}

$x = 'sum';

if (is_callable($x)) {
    echo $x(1, 2, 3, 4);
}
