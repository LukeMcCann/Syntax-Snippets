<?php 

$array = [1, 2, 3, 4];

print_r(array_map(fn($number) => $number * 2, $array));
