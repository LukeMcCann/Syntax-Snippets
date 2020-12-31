<?php 

// variables

$var = 'Hello';

// constants

const CONSTANT_VAR = 'This will never change';

define("OLD_CONSTANT", 'This is a older syntax');

// arrays

$var = ['one', 'two', 'three'];

// accessing arrays

$var[0];

// multi-dimensional arrays

$var = ['first-array', ['embedded-array']];

// accessing multi-dimensional arrays

$var[0][1];

// Associative arrays

$keys = ['key' => 'value', 'key2', 'value2'];

// accesing associative arrays

$keys['key'];

// Strings

$world= 'World';

$interpreted = "Hello $world";

$literal = 'hello $world';

$escape = "hello \$world";

// strings access

$string[0];

// Integer

$integer = 1;

// boolean

$bool = true;

$bool = false;

// float

$float = 0.22;

// Null coalesce

$result = 'Hello' ?? false;

// Conditionals

if (true) {
    // do stuff
} else {
    // do other stuff
}


if ('one') {
    // do one
} elseif ('two') {
    // do two
} else {
    // do other stuff
}

// ternary operator

$valueIfTrue = 'This will be returned in the case of the first part being true.';
$valueIfFalse = 'This will be returned in the case of the first part being false.';
$result = true ? $valueIfTrue : $valueIfFalse;

echo $result;

// While loop

$running = true;
while($running) {
    // do stuff
    $running = false;
}

// for loop
$arr = ['one', 'two', 'three'];
for ($i = 0; $i <= sizeof($arr); $i++) {
    echo $arr[$i];
}

// for each loop
foreach ($arr as $i) {
    echo $arr[$i];
}

// for each loop associative array
$assoc = ['key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'];
foreach ($assoc as $key => $value) {
    echo "key: $key   :    value: $value";
}