// Here is the longhand way JavaScipt handles creating new objects. 

function userCreator(name, score) {
    const newUser = Object.create(userFunctions);
    newUser.name = name; 
    newUser.score = score; 
    return newUser; 
}

userFunctions = {
    sayName: function () {
        console.log(`Hi, I'm ${this.name}`);
    },
    increment: function () {
        this.score++;
    }
}

const user1 = userCreator('Luke', 19);

user1.sayName();

// This is how we manually create objects with fine-grain control
// this was the standard for a long time. 

// It is important to understand, that in JS we never return
// just a function. Anytime we use functions we are actually using
// an object/function pair. 

// Run the following
// console.log(Object.prototype);
// console.log(Function.prototype);

// Every object in JS has a hidden __proto__ property known as "dunder proto dunder". 
// This __proto__ property can be seen when we log out any object. It points to
// Objects in the prototype chain. 

// Create your own object
// log out the object itself and view the __proto__ property. 
// notice how we have access to method not on our current object?

// This is known as the protoype chain. The prototype chain is how
// JS imlements prototypal inheritance. This differs greatly from 
// class based inheritance, some would argue it is better as it
// allows us to define a function in a single place and simply 
// reuse that function by having our object point to a field 
// on another object. 

// Notice how every object in JS eventually points to the base Object.prototype 
// Then notice how this is true for even Function. Remember, in JS
// EVERYTHING is an object. Even an array is not really an array in the sense
// of how other language implement it, it is an object. 

// How can we tell if something is an object? 
// well, first of all we can check the protoype chain to see
// if it "inherits" from Object. Secondly, if we can use dot 
// notation on it, it's an object. 

// When we use the NEW keyword we are not creating an instance.
// Do not be fooled, JS classes are but a syntactic sugar. 
// Instead, NEW tells JS we want to run the function to the right,
// but we want some stuff done for us in the background. 

// Essentialy when we use the NEW keyword, JS sets up 
// the object exactly the same as we have at the top of this file. 
// However, JS creates the object for us, sets our properties, 
// and returns the object without us needing to tell it to do so.

// The key concept to take away from this is that JS classes
// are not the same as C++ classes, Java classes, PHP classes 
// or any other OO based language. JS works very differently 
// under the hood, understanding this is essential for debugging
// and understanding when your code goes wrong. 

// JS' prototypal inheritance is a very powerful feature, but
// can also be confusing for devleopers from other backgrounds. 

// When we use inheritance in JS we use the term loosely. 
// in JS we never actually "inherit" a copy of our methods
// or parameters. Instead we inherit the ability to access
// that method/property on the prototype chain, effectively
// we are inheriting permissions. 

// Some developers outright refuse to use ES6 class syntax.
// There is a debate ongoing in the community, as it can
// be argued the syntactic dress of classes can obscure
// how JS is actually working. It makes it confusing
// to other devleopers from other backgrounds, and
// can be a source of hidden pain for newer developers. 

// Personally, I think as long as you understand
// the inner workings of JS there is no harm 
// in using either approach. The ES6 syntax
// is much cleaner and easier to reason about, 
// whilst it does obscure the underlying
// interactions going on within JS a good understanding 
// of this will be sufficient. 

// I find myself writing practice code with the old
// methods of conducting these tasks regularly just 
// to keep the information fresh in my mind. 

// This file itself is simply a means of revision
// to ensure my understanding has not dwained. 

// So, how do we utilise inheritance?
// basically, we have to set up the prototype
// chain. We want our object paidUser
// to be able to use the functionality of a regular user
// therefore we must set the prototype to point to the 
// prototype property on our Object (note that prototype
// is not a keyword, simply what JS calls the property by default). 

function paidUserCreator(paidName, paidScore, accountBalance) {
    const newPaidUser = userCreator(paidName, paidScore);
    Object.setPrototypeOf(newPaidUser, paidUserFunctions);
    newPaidUser.accountBalance = accountBalance; 
    return newPaidUser;
}

const paidUserFunctions = {
    increaseBalance: function () {
        this.accountBalance++;
    }
}
Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator('Michelle', 2, 10);

paidUser1.sayName();

// As such, we can create our paidUserCreator, which will 
// be a type of user. We construct this by using our userCreator
// to create the user, then set our paidUser prototype. 

// We can then add our new properties, and create our paidUserFunctions
// and add those as a reference to the prototype chain. 


// When we use the NEW keyword we essentially tell JS
// to automate this setup for us.

function userCreator(name, score) {
    this.name = name;
    this.score = score; 
}

userCreator.prototype.sayName = function () {
    console.log(this.name);
}

const userX = new userCreator('Martin', 1);

userX.sayName();

// As mentioned prior, do not get confused here, 
// this is not creating a new instance
// as you would expect in other languages. 

// Instead, we are doing exactly the same as in
// the previous examples. We are creating an
// object, assigning our functions to the
// prototype property and returning the 
// object into a new constant. 

// Under the hood this is functionally the same, 
// this is why we call it a syntactic sugar, 
// it simply looks cleaner, and is easier to
// reason about. 

// the NEW keyword automates a load of things
// we would usually do manually within the
// functions execution context. 

// First of all, it sets up the "this" keyword
// as a new object: this: {} 

// next, it sets up our default __proto__ property
// on our object. 

// and lastly, it returns our object after
// we have set our properties from the passed
// parameters. 

// Remember, prototype is a property,
// it is also an object within itself:

// Object: { prototype: { [[functions]], create: [[function]] } } 
// Function:: { prototype: { [[functions]], call: [[function]] } }

// The __proto__ of all objects will eventually reference the parent object
// Object in the chain. Whena  function is looked up on the prototype chain
// we check each child down the chain in order of linkage. If we reach Object
// and there is no property matching our lookup Object defaults it to NULL
// which tells us we have reached the end of our chain, and there is no
// matching function, in this case JS will throw an error.
