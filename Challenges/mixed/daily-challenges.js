function secondLargest($a) {
    if (sizeof($a) < 2) { return null; }
    
    $sortedArray = sort($a);
    $largestIndex = array_keys($a, max($a))[0];
    
    return $a[$largestIndex -1]; 
}

function secondLargest($a) {
	rsort($a);
	return $a[1];
}

function secondLargest($a) {
	return max(array_diff($a, [max($a)]));
}

function secondLargest($a) {
	sort($a);
	return $a[ count($a) -2 ];
}


// Higher-Order functions

function add($n) {
	return function($a) use ($n){
		return $a + $n;
	};
}

echo add(10)(30);

function multiply($n) {
    return function ($a) use ($n) {
        return $a * $n;
    };
}

echo multiply(10)(20);

// Fibonacci recursive 

<?php

function fib($num) {
	if ($num < 2) return $num;
	return (fib($num - 1) + fib($num - 2));
}

echo fib(6);


// Primes below N 

function isPrime($num) {
 for ($n = 2; $n <= sqrt($num); $n++) if ($num % $n == 0) return false;
 return $num > 1;
}

function primesBelowNum($n) {
 $res = [];
 for ($x = 2; $x <= $n; $x ++) {
  if (isPrime($x)) array_push($res, $x);
 }
 return $res;
}


// isPrime

<?php
        //Enter your code here, enjoy!

$numbers = [1, 2, 3, 4, 5];

function isPrime($n) {
    for ($i = 2; $i <= sqrt($n); $i++) return false;
    return $n > 1; 
}

foreach ($numbers as $number) {
    echo isPrime($number);
}


// Array Filter

<?php
        //Enter your code here, enjoy!

$array = [ 1, 5, 8, 9];

function test($var) {
    return $var !== 1;
}

$test = array_filter($array, "test");


print_r($test);


// Sort By Length

function sortByLength(array $arr = []) {
    if (sizeof($arr) < 2) { return $arr; }
    
    usort($arr, function (string $itemA, string $itemB) {
        return strlen($itemA) <= strlen($itemB) ? -1 : 1;
    });
    
    return $arr;
}

// Pass by reference swap

<?php declare(strict_types=1);

$a = 1;
$b = 5;

function swap(&$a, &$b) {
    
    if ($a === $b) return;
    
    $tmp = $a;
    $a = $b;
    $b = $tmp;
}

swap($a, $b);

echo "a: $a \n";
echo "b: $b \n";


// PHP Goto
<?php declare(strict_types=1);

goto a;

echo 'world';
function test(string $a) {
    echo "Funciton ran $a";
}

a: 
test('hello');


// Factors of positive integers

function factorize(int $n) {
    
    $factors = [];
    
    for ($i = 1; $i <= abs($n); ++$i) {
        if (abs($n) % $i == 0) {
            array_push($factors, $i);
        }
    }
    
    return $factors;
}

// Neater Factorize 

function factorize($num) {
	return array_values(array_filter(range(1, $num), function($v) use($num) {
		return $num % $v == 0;
	}));
}

// Validate Comments

function commentsCorrect($str) {
	return empty(str_replace(array('/**/', '//'), '', $str));
}

// Validate Comments Regex Attempt

^([\/]+){2}.*|^([\/*+]{1}.*([*\/+]{1})$)


// Self made testing 

<?php

$comments = [
    'not a comment' => false,
    '// single line comment' => true,
    '/* Multi Line Comment */' => true,
    '/** Multi Line Comment **/' => true,
    '/ not a comment' => false,
    '///*/**/' => false,
    '//*/**/' => false,
    '/////' => false,
    '///' => false,
    '/**///**/' => false, 
    '/**/////**/' => false,
    '/**//**//**//**/' => true,
    '//////' => true,
    '/**//**//**//**/' => true, 
    '///**///' => true,
    '/**//////**//**////**/////' => true,
    '//' => true,
    '/**/' => true
];

function commentsCorrect($str) {
	return preg_match('/^([\/]+){2}.*|^([\/*]{1}.*([*\/]{1})$)/', $str);
}


foreach ($comments as $key => $value) {
    $result = commentsCorrect($key);
    
    $str_val = $value === true ? 'true' : 'false';
    echo "results: \n" . "    $key: $result \n";
    echo "expected: $str_val \n";
    
    $passed = [];
    if ($value === $result) {
        array_push($passed, $value);
    }

}

    if (count($comments) === count($passed)) {
        echo "\n Tests Passed \n"; 
    } else {
        echo "\n Some Tests Failed \n";
    }


    // SQL Baroque Queries

CREATE TABLE widgets (
  id serial NOT NULL PRIMARY KEY, 
  dashboard_widget_preferences json DEFAULT '{}'::json
);

INSERT INTO widgets (dashboard_widget_preferences)
VALUES('{"widget":"First Widget", "config": {"position":1,"type":"BarChartWidget","event_id":"7519be30-a819-11eb-a2b5-ed6c341e5a7a", "created_at":"2021-05-14 13:43:55","updated_at":"2021-05-14 14:52:29"}}'),
      ('{"widget":"Second Widget", "config": {"position":2,"type":"BarChartWidget","event_id":"7519be30-a819-11eb-a2b5-ed6c341e5a7a", "created_at":"2021-05-14 13:43:55","updated_at":"2021-05-14 14:52:29"}}'),
      ('{"widget":"Third Widget", "config": {"position":3,"type":"BarChartWidget","event_id":"7519be30-a819-11eb-a2b5-ed6c341e5a7a", "created_at":"2021-05-14 13:43:55","updated_at":"2021-05-14 14:52:29"}}'),
      ('{"widget":"Fourth Widget", "config": {"position":4,"type":"BarChartWidget","event_id":"7519be30-a819-11eb-a2b5-ed6c341e5a7a", "created_at":"2021-05-14 13:43:55","updated_at":"2021-05-14 14:52:29"}}'),
      ('{"widget":"Fifth Widget", "config": {"position":5,"type":"BarChartWidget","event_id":"7519be30-a819-11eb-a2b5-ed6c341e5a7a", "created_at":"2021-05-14 13:43:55","updated_at":"2021-05-14 14:52:29"}}');

SELECT dashboard_widget_preferences ->> 'widget'  AS widget, dashboard_widget_preferences ->>'config' as config FROM widgets;

// Simple suffx append using anonymous functions

<?php
    
$words = [
    'hopeless',
    'total',
    'fear',
    'cheer',
    'book'
];

function add_suffix($suffix) {
    return function ($word) use ($suffix) {
        return "$word$suffix";  
    };
}

$suffix = "ly";
$add_ly = add_suffix($suffix);
$suffx = "less";
$add_less = add_suffix($suffix);
$suffix = "ing"; 
$add_ing = add_suffix("ing");


foreach ($words as $word) {
    echo "$word test: \n";
    echo $add_ly($word) . " \n";
    echo $add_less($word) . " \n";
    echo $add_ing($word) . " \n";
    echo "\n";
}


// Match String Ending 

<?php

$testCase = [
    "samurai" => "ai", 
    "sumo" => "omo", 
    "ninja" => "ja",
    "sensei" => "i",
    "saumrai" => "ra",
    "abc" => "abcd",
    "abcabc" => "bc",
    
];

function solution($str, $ending) {
  return boolval(preg_match("/[$str]$/", $ending));
}

foreach ($testCase as $string => $ending) {
    echo "$string => $ending Test: \n";
    echo "     " . var_export(solution($string, $ending));
    echo "\n";
}
 
 // Daily Challenges Build Cirlce 
 
<?php

class Circle 
{
    private $radius;
    
    public function __construct($radius = 1) 
    {
        $this->radius = $radius; 
        echo 'Constructed an instance of ', __CLASS__, ' with radius=', $this->radius, ".\n";
    }
    
   public function __destruct() {
      echo 'Destructed instance ', $this, ' of ', __CLASS__, ".\n";
   }
   
   public function getRadius() { return $this->radius; }
   
   public function setRadius($radius) { $this->radius = $radius; }
 
   public function __toString() {
      return __CLASS__ . '[radius=' . $this->radius . ']';
   }
   
  public function getArea() 
  {
      return $this->radius * $this->radius * pi();
  }
}



// require_once 'MyCircle.php';
 
// Allocate an instance of class MyCircle
$c1 = new Circle(1.1);  // Test constructorget
 
// Try different ways of printing an object
var_dump($c1);
print_r($c1);
var_export($c1);
echo "\n";
 
echo "Radius is: {$c1->getRadius()}\n"; // Test getter
$c1->setRadius(5);           // Test setter
echo "$c1\n";                // Call __toString() implicitly
echo "{$c1->getArea()}\n";   // Test getArea()
 
$c2 = new Circle();   // Test construtor with default argument
echo "$c2\n";
 
echo "Done.\n";


// Perimeter of a Rectangle

<?php

function findPerimeterOfRectangle($width, $length) {
    return 2 * ($width + $length);
}

echo findPerimeter(9, 2);
// $this->assertEquals(26, findPerimeter(7,6));
// $this->assertEquals(60, findPerimeter(20,10));
// $this->assertEquals(22, findPerimeter(9,2));


// Facebook Likes

// solution 1

function likes (names) {
  return {
    0 : 'no one likes this',
    1 : `${names[0]} likes this`,
    2 : `${names[0]} and ${names[1]} like this`,
    3 : `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4 : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)]
}

// solution 2

function likes (names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}


// Odd Or Even JS 

function even_or_odd(number) {
    return (number % 2) === 0 ? 'Even' : 'Odd';
}


// alternative (arrow function)
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';


// Debounce/Throttle

debounce: Grouping a sudden burst of events (like keystrokes) into a single one.
throttle: Guaranteeing a constant flow of executions every X milliseconds. 
Like checking every 200ms your scroll position to trigger a CSS animation.


// Square Digits (JS)

let num = 9118;

let squareDigits = (num) => {
    let digits = num.toString().split("");

    let result = [];
    digits.forEach(digit => {
        result.push(Math.pow(digit, 2));
    });
    
    return result.join("");
}

console.log(squareDigits(num));

const squareDigits = num => {
    return +Array.from(num.toString(), n => n * n).join('')
}
