<?php

eval("
    class Test {
        public function hello() {
            echo 'Hello World';
        }
    }
");

$test = new Test();
$test->hello();
