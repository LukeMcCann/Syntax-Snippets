function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

const eva = new userCreator('Eva', 9);

const fred = userCreator('Fred', 1);

console.log(eva);

console.log(fred);

console.log(this);


// ES6 Syntax is much faster to write. 
// as such it is often used professionally. 
// There are some dangers however.
// Many develpers do not understand how
// the new keyword works under the hood.
// devs coming over from object oreinted 
// languages like PHP and Java see the
// new keyword and assume this is to do 
// with creating a new object instance.
// This assumption is wrong, and makes understanding,
// reasoning with, and debugging code difficult. 

// The new keyword does a lot under the hood 
// that we would usually do manually when working
// with the prototype chain. 

// We can think of the new keyword as a means
// to automate the process of building objects
// on the protoype chain

// Instead of having to define our object

function objCreator(param1, param2) {
  this.param1 = param1;
  this.param2 = param2; 
}

objCreator.prototype.myFunction = function () { // do stuff };

// JS will do this under the hood.
// When JS sees the NEW keyword it: 

// 1. Creates a new Object assigned to "this" (this: {}) setting our parameters on the object
// 2. Sets the __proto__ parameter on our object to reference the prototype property of the function object/instance (objCreator in this case)
// 3. Returns this

// It is important to remember that whilst we do not often talk about it
// functions in JS are not merely functions, they are also objects
// they are a bundle of a function/object which we can interact with using dot  notation.
