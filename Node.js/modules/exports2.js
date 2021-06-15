'use strict' 

// here we update "exports" changing its content
// from an object to a function
exports = function () {
  console.log('Hello World');
}

console.log(exports); 

console.log(module.exports); // this is what is passed to exports,
                             // at this moment they both point to 
                             // the same memory location.


// if we were to require this into a new file to
// get this code to execute, we would find that exports
// outputs as a Function, whilst module.exports is still an object.
//
// Initially module.exports points to an object in memory,
// when the IFFE is invoked exports points to this same
// object in memory via reference.
//
// In JS however, when setting a variable equal to a value
// a new location in memory is assigned, in other words, 
// the original reference is broken.
//
// Here lies the problem, what is returned from require?
// module.exports, so our updated exports will not be returned
// from here.
