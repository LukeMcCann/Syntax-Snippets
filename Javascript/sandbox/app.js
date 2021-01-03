// Each object in JS inherits from the Object.prototype
// and a prototype is itself an object.
// All objects inherit the methods and properties of their prototype.

// Person Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calcualteAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// In the above example we create a Person object via our constructor
// Attached to this instance is a prototype, we can see this if we
// inspect the person object in the console under __proto__ 
//
// The prototype is not somehting which could be accessed looping via properties
// instead we access it via the pointer __proto__ which references our prototype
// in the prototype chain. If we inspect __proto__ you will see a nested __proto__ which
// points to the Object prototype.
//
// This is the prototype chain, our objects inherit from properties and methods from
// their prototypes. You can tell the prototype from __proto__ via the consturctor parameter
// which shows the constructor functions name. 
//
// This is why we must be careful when using arrow funcitons. 
// When we use arrow functions this will be harder to track, instead
// the line at which the function is defined will be shown rather than
// the function name (as arrow funcitons are anonymous)

// We shoulz define data specific properties within the constructor
// function. These will be tied to each independent instance,
// meaning we can create objects which pass in different values
// for our properties.
//
// However, our functions can be defined in a prototype. This would allow
// functions to be shared accross multiple objects without each individual
// object having to implement/recreate the same funciton. Instead these functions
// are shared via inheritance of the prototype. This means that any object
// which extends from this prototype can call upon the functions implemented in
// the prototype.
//
// Similar to class languages all prototypes extend the Object.prototype.
// This functions similarly to how in languages such as C++ and Java all objects
// inherit from the Object class. This means any object may call upon classes implemented
// by the Object.prototype.

// In this example our properties:
//
//      firstName, lastName, dob
//
// should contain data specific to our object.
//
// If I retrieve Luke's birthday I want it to be the data specific to Luke,
// not return Roberts birthday despite calling the Luke object funciton.
//
// calculateAge however functions exactly the same for each object and 
// can be extracted from our constructor into a prototype. This would
// allow each of the Objects to access the function without creating
// it multiple times in the object consturctors.
//
// Anything which is the same for all objects of the same type (e.g. Person)
// should be declared within the prototype.
//
// This is more efficient and prevents us flooding out constructor
// with methods but storing them in the prototype.

// Calculate age (comment out + uncomment calcualteAge in constructor
// to see without prototype).
Person.prototype.calcualteAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.changeName = function(firstName) {
    this.firstName = firstName;
}

Person.prototype.changesSurname = function(surname) {
    this.lastName = surname;
}

const luke = new Person('Luke', 'McCann', '5-17-95');
const darryl = new Person('Darryl', 'McCann', '9-10-70');
const robert = new Person('Robert', 'McCann', '5-12-1949');

console.log(luke);

console.log(robert.getFullName());
console.log(robert.calcualteAge());

console.log(luke.getFullName());
console.log(luke.calcualteAge());

luke.changeName('Newt');
console.log(luke.getFullName());