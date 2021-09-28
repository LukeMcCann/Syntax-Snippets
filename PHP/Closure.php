<?php 

$x = 1;
$sum = function (int|float ...$numbers) use ($x) : int|float {
    $numbers[sizeof($numbers)] = $x;
    return array_sum($numbers);
};

if (is_callable($sum)) {
    echo $sum(1, 2, 3, 4);
}
