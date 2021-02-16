<?php

// Declare strict types
// This must be done for every file,
// strict typing forces you to pass proper types
// leading to better readability, reliability and less bugs
declare(strict_types = 1);

// Print
echo 'thing to print';

// include/require

include('file_path.php');
require('file_path.php');

include_once('file_path.php');
require_once('file_path.php');


include 'file_path.php';
require 'file_path.php';

include_once 'file_path.php';
require_once 'file_path.php';

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


// class

class Person {

    private string $dependency;

    private string $name;

    // Constructor
    public function __construct(string $dependency)
    {
        $this->dependency = $dependency;
    }

    // Functions/methods
    public function say() {
        return $this->dependency;
    }

    // destructor
    public function __destruct()
    {
        echo 'Destroying object';
    }
}

// Other magic methods
// __get(), __set(), __sleep, __toString()

$person = new Person('Hello');


// Interfaces
// interfaces act as a contract, the object implementing the interface promises
// to implement any methods declared within that interface.
interface Animal {
    private int $legs; 

    public function makeNoise();
}

class Dog implements Animal {
    private int $legs;

    public function makeNoise()
    {
        echo "Woof!";
    }
}

class Cat implements Animal
{
    private int $legs;

    public function makeNoise()
    {
        echo "Meow!";
    }
}

$cat = new Cat();
$dog = new Dog();

$dog->makeNoise();
$cat->makeNoise();

// Namespacing

namespace App;

// Inheritance

class Vehicle {

    private int $numWheels;
    private int $numDoors;

    public function honk() {
        echo 'Honk!';
    }
}

class Car extends Vehicle {}

$car = new Car;
$car->honk();

// Composition

class GearBox {
    private int $gear;

    public function __construct(int $defaultGear)
    {
        $this->gear = $defaultGear;
    }

    public function changeGear(int $gear) 
    {
        $this->gear = $gear;
        echo "Current Gear: $gear";
    }
}

class Bike {
    private Gearbox $gearbox;
}

