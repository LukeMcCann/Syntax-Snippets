<?php

// PHP8 supports Immediately Invoked Function Expressions much like JS.

$sayHello = (function() {
    echo "Hello World!\n";
});

$sayHello();

(function() {
    echo "Goodbye!\n";
})();
