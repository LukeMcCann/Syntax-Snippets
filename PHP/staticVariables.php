<?php 

// Static variables can be
// useful for caching expensive
// function calls.

function getValue() {
    static $value = null;

    if ($value === null) {
        $value = expensiveFunction();
    }

    return $value . "<br />";
}

function expensiveFunction() {
    sleep(2);

    return 10;
};

for ($i = 0; $i < 3; $i++) {
    echo getValue();
}
