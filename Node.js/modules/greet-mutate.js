'use strict';

// In this case, instead of overwriting
// the original exports object, we assign
// the function to a new property on 
// the existing exports object.
// This is called mutating the object.
exports.greet = function () {
  console.log('Hello World');
}

console.log(exports);

console.log(module.exports);
// In this case our function
// will be returned wihtin
// module.exports, as our 
// reference is not broken
// by assignment.
