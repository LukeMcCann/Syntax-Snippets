'use strict';

// IIFE's affect the scope of your code.

// We can see this if we try to invoke an anonymous function 
// using the regular function syntax

// declaring a function in this manner will show syntax error
//
// function () {}

// when we need a function immediately available 
// we need JS to treat the function as an expression
// we can do this by surrounding the declaration in parentheses

// This tells the JS engine to interpret this as an expression
// rather than a statement. Note how we invoke the function immediately
// after delcaration using another set of parentheses.

(function () {
    let firstName ='John';
    console.log(firstName);
}());

let firstName = 'Jane';
console.log(firstName);

// if we log out both these variables
// we find that both names are logged. 
// This is due to scope, in JS when we
// declare variables in a function
// they are protected wihtin their own scope,
// this is to do with how JS processes data through
// creating new execution contexts.
