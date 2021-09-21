<?php

// First part of the Nesting Structure Comparison, 
// this will check basic arrays, needs to be expanded 
// to ensure the structure is exactly equal. 

// It should be remembered that 
// we need to exit out of subarrays 
// back to the original array, 
// as we need to iterate to the end of 
// both, we must therefore remember our
// position upon entering the sub_array, 
// and return to the point after that
// item in the parent array to continue
// execution.
function same_structure_as(array $a, array $b): bool {
    $comparator_points = 0;
    $a_points = calculate_structure_points($a, $comparator_points);
    $b_points = calculate_structure_points($b, $comparator_points);
    return $a_points === $b_points;
}

function calculate_structure_points (array $arr, int $comparator_points) {
    foreach ($arr as $item) {
        if (is_array($item)) {
            $comparator_points++;
            calculate_structure_points($item, $comparator_points);
        }
    }
    return $comparator_points;
}
