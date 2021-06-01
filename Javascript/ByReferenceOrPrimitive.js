'use strict';

// When we pass types by value or by reference in JS
// what we are talking about is passing the value either by
// a primitive type (value) or by a reference to the object

// if we have a variable a this will point to some position in memory
// if we pass this to a function a copy of this position in memory
// is created in another position in memory, this is passing by value. 

// When we pass an object however, something very different happens.
// Rather than creating a copy in a new location in memory, when we pass
// an object to a function a reference is created to the same location in memory.
// This is called passing by reference, when you change one, you change the other
// because they are one and the same value.


// a points to a location in memory
let a = 1;

// a copy of a is created in another location in memory
function test(a) {
  console.log(a);
}


// person points to a location in memory
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// person points to the same location in memory
function speak(person) {
  console.log(`${person.firstName} says hello`);
}


// this can be shown better in the following example

// create function change
function change(b) {
  b = 2;
}

// create variable a
let a = 1;
// change a value
change(a);

// A is a primitive, therefore we are passing by value
// only the copy in memory is changed to the new value.
// What happened in change has no impact on the orignal 
// value a in memory at all.
console.log(a);

// We create a function to pass an object
function changeObj(d) {
    // the object is overwritten with function prop1 and object prop2
    d.prop1 = function () {};
    d.prop2 = {};
}

// c is set to an empty object
let c = {};

// c.prop1 is set to an emtpy obkect
c.prop1 = {};
// we call change on the object updating the props saved
changeObj(c);

// here we will receive a prop1 of type function and a prop2 of type object.
// This is because althoguh we set c.prop1 to an empty object, this is overwritten
// within the change function. Unlike the previous example we are referencing the 
// same location in memory when passing an object to a function, known as passing
// by reference.
console.log(c);

