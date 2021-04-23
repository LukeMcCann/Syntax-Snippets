<?php
        //Enter your code here, enjoy!

function possiblePath($arr) {
    if (empty($arr)) return false;
    
    $pathString = implode('', $arr);
    preg_match('/^(H|[1-4](?!\d))(?!\1)(H|[1-4](?!\d))*/', $pathString, $matches);
    
    return ($matches[0] ?? []) === $pathString;
}

echo '1: ' . possiblePath([1, 'H', 2, 'H', 3, 'H', 4]); // true
echo "\n";
echo '2: ' . possiblePath(['H', 3, 'H']); // true
echo "\n";
echo '3: ' . possiblePath(['H']); // true
echo "\n";
echo '4: ' . possiblePath([3]); // true
echo "\n";
echo '5: ' . possiblePath([1, 'H', 1, 'H', 1, 'H']); // true
echo "\n";
echo '6: ' . possiblePath([3, 'H', 2, 'H', 3, 'H', 1]); // true
echo "\n";
echo '7: ' . possiblePath([1, 2, 'H', 3]); // false
echo "\n";
echo '8: ' . possiblePath(['H', 1, 3]); // false
echo "\n";
echo '9: ' . possiblePath([2, 4, 'H']); // false
echo "\n";
echo '10: ' . possiblePath(['H', 2, 'H', 3, 4, 'H', 1, 'H', 2, 'H']); // false
echo "\n";
echo '11: ' . possiblePath([]); // false


// Alternatives

function possiblePath($arr) {
                return !preg_match("/11|22|33|44|HH|12|34|13|24/i", implode($arr));
}

function possiblePath($arr) {
  return !preg_match("/\d(?=\d)/", implode($arr));
}
