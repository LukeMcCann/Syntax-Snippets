<?php

function same_structure_as($a, $b) : bool {
    $a_comparative = calculate_structure_points($a);
    $b_comparative = calculate_structure_points($b);
    return boolval($a_comparative === $b_comparative); 
}

function calculate_structure_points(array $array, int $current_points = 0) {
    if (empty($array)) {
        return $current_points; 
    }
    
    $last_index = sizeof($array) -1;
    foreach ($array as $pointer => $value) {
        if ($pointer === $last_index && 
            gettype($array[$last_index]) !== gettype(array())) {
            return $current_points;
        }
        
        if (gettype($value) === gettype(array())) {
            $current_points++;
            $current_points += calculate_structure_points($value, $current_points);
        }
    }
}

echo "Result: ";
echo same_structure_as([1, [1, 1]], [2, [2, 3]]) ? 'true' : 'false';
