<?php 

$sum = function (callable $callback, int|float ...$numbers) : int|float {
    return $callback(array_sum($numbers));
};

echo $sum(function ($element) {
    return $element * 2;
}, 1, 2, 3, 4);
