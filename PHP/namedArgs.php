<?php 

function sayHello(string $name, int $age = 26) {
    echo "Hello my name is $name, and I am $age";
}

sayHello(name: 'Luke');
