<?php 

$sum = function (int|float ...$numbers) : int|float {
    return array_sum($numbers);
};

if (is_callable($sum)) {
    echo $sum(1, 2, 3, 4);
}
