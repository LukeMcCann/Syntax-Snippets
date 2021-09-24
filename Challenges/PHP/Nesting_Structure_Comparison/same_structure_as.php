Complete the function/method (depending on the language) to return true/True when its argument 
is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

<?php

function same_structure_as(array $a, array $b) : bool {
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
            $current_points += $pointer+1;
            $current_points += calculate_structure_points($value, $current_points);
        }
    }
    return $current_points;
}


final class SameStructureAsTest extends TestCase {
  public function testDescriptionExamples() {
    $this->assertTrue(same_structure_as([1, 1, 1], [2, 2, 2]));
    $this->assertTrue(same_structure_as([1, [1, 1]], [2, [2, 2]]));
    $this->assertFalse(same_structure_as([1, [1, 1]], [[2, 2], 2]));
    $this->assertFalse(same_structure_as([1, [1, 1]], [[2], 2]));
    $this->assertTrue(same_structure_as([[[], []]], [[[], []]]));
    $this->assertFalse(same_structure_as([[[], []]], [[1, 1]]));
  }
}
