// I hope this following comparison will clear up some confusion
// of what ES6 classes are actually doing under the hood. 
// It is important to understand that ES6 classes are nothing but
// syntactic sugar, JS performs the same tasks as it does in ES5
// under the hood.

// However, as you can see, it is much cleaner to use the ES6 syntax.
// This class syntax allows us to package our code together, making
// it far more readable and compact. 


// ES6 Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        const { name, age } = this;
        return `Hello, my name is ${name} and I am ${age} years old.`;
    }
    
}

class Programmer extends Person {
    constructor(name, age, level) {
        super(name, age);
        this.level = level;
    }

    sayHi() {
        const { name, age, level } = this;
        return `Hello, my name is ${name}, I am ${age}, and a ${level} engineer.`;
    }

    code() {
        const { name } = this;
        return `${name} fires up their terminal and begins to write code...`;
    }
}

const darryl = new Programmer('Darryl', 27, 'Senior');

darryl.code();


// Es5 Prototypes

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    const { name, age } = this;
    return `Hello my name is ${name}, and I am ${age} years old.`;
}

function Programmer(name, age, level) {
    this.name = name;
    this.age = age;
    this.level = level;
}

Programmer.prototype.code = function () {
    const { name } = this;
    return  `${name} fires up their terminal and begins to write code...`;
}

Programmer.prototype = Object.create(Person.prototype);

Programmer.prototype.sayHi = function () {
    const { name, age, level } = this;
    return `Hello, my name is ${name}, I am ${age}, and a ${level} engineer.`;
}

let luke = new Programmer('Luke', 26, 'Newbie');

luke.sayHi();

let bob = new Person('Bob', 74);

bob.sayHi();





