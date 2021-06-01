'use strict';

function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;


}

let john = new Person('John', 'Doe');

console.log(john.firstName);
