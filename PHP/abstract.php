<?php 

abstract class Animal {
    public $name;
    public $color;

    public function describe() 
    {
        return $this->name . ' is ' . $this->color;
    }

    abstract public function makeSound();
}

class Duck extends Animal {
    public function describe() {
        return parent::describe();
    }

    public function makeSound() {
        return 'Quack!';
    }
}


Class Dog extends Animal {
    public function describe()
    {
        return parent::describe();
    }

    public function makeSound() 
    {
        return 'Woof!';
    }
}

$duck = new Duck();
$duck->name = 'Mongolian Duck';
$duck->color = 'Green';

echo $duck->describe() . '<br>';
echo $duck->makeSound() . '<br>';
