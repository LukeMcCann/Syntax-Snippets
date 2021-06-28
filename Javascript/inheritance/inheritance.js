// Inheritance JS


// Prototypal inheritance allows us to inherit properties 
// from the prototype object which is automatically 
// added to every object we make. 

// If a property accessed does not exist on the current
// object, JS checks the next prototype in the chain up until
// it reaches a protype which evaluates to null. 

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

// This type of inheritance is however incomplete.
// If we want a more complete inheritance we have to
// use the call method, and change the reference of 'this'
// to reference the current object. This allows access
// to the parent objects properties. 

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

// This basically allows you to call a function defined somewhere else, 
// but in the current context. The first parameter is the value of 'this'
// you want to use when running the function, any parameters following
// on from 'this' are parameters which should be passed when the function
// is invoked. 

// We want the Teacher() constructor to take the same parameters as the 
// Person() constructor it is inheriting from, so we specify them all as 
// parameters in the call() invocation.

// The last line inside the constructor defines the new subject property that 
// teachers are going to have, which generic people don't have.

// You may be thinking, why not just create a new Teacher constructor?

function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}

// However, it is important to note that this is just redefining properties
// anew, not inheriting them from the Person object. This defeats the objective
// of attempting to use polymorphism. 
