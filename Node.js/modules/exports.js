'use strict'

// Exports vs module.exports

// When the V8 engine processes our code,
// our code is wrapped in an IIFE (immediately invoked function epression).
// While this is not invoked right away in the usual way, various parameters,
// are passed in to the function, including the module object which we export.
// THe first parameter passed is the exports parameter

(function exports, require, module, __filename, __dirname) {
  // this would be our code concatenated into 
  // the function by the V8 engine.
  let greet = function () {
    console.log('Hello World');
  };
  
  // And here we overwrite the exports object with our function
  module.exports = greet;
});

// when the function is executed, whenever our code is run.
// The first parameter is module.exports (as below).
fn(module.exports, require, module, filename, dirname);

// Here we can see that the parameter "exports" is really
// just a shorthand for "module.exports". These two
// variables point to the same object in memory.

// So why not just use exports all the time?

// Here we see a slight issue, which is down to a niche 
// probelm in JS when objects are passed by reference.

// Rememeber that the function returns module.exports
// this is returning the property of "exports" on
// the module object. This is a separate
// variable from the exports variable, the parameter that receives
// that value.

// While both point to the same memory location, passing by reference, 
// They do not work with all of the module patterns.
