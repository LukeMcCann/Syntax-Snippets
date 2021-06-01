'use strict';

function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;


}

let john = new Person('John', 'Doe');

console.log(john.firstName);

// When we use prototypes objects are assigned to one another down the prototype chain

'use strict';

function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;


}

// This allows us to call methods through prototypal inheritance
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
};

// The object John doesn't have a method called greet, therefore JS looks down the
// prototype chain and finds the prototype object, which does have a greet method.
let john = new Person('John', 'Doe');
console.log(john.greet());

// When we declare prototypes we are declaring a set of methods to be used by 
// all objects constructed from this particular object constructor 
// In this instance, this would be "Person" 


let jane = new Person('Jane', 'Doe'); 
console.log(jane.greet());

// We can take a look at the prototype object
console.log(john.__proto__);
