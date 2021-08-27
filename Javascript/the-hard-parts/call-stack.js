
// JS is special in terms of it's execution.
// Each time we enter a function we are leaving the 
// global execution context in favor of a newly created execution 
// context specifically made for that function. 

// If a variable is used in JS, JS will look down the call stack 
// to find the variable even if it does not exist in the local context.
// in this case we can declare counter wihtin the outer function
// or in the global context and the function will still work as 
// JS will look down the call stack and find the declaration of
// the variable. 

// Of course, both approaches differ in terms of how the function
// behaves. If we declare counter inside the block scope
// it should no longer be accessible from the global scope, however,
// since we are returning a function within the outer function
// the variable is packaged as a persistent piece of data (kept in a structure)
// much like an array of objects, on the incrementCounters Scopes array. 

// This means that when we increment the counter we continue to 
// increment that same variable after "exporting" our inner function
// to it's own variable. It is important to note that once we do this
// it now has no relation what-so-ever to the outer function. This means
// we can create as many incrementCounters using the outer function 
// as we please, each will have it's own "counter" variable exported
// alongside of it, and each will be independent of the other.

// We should be careful as this can lead to unexpected behaviours, as 
// we can have similarly named variables in the global execution context
// which we may reference indirectly. 

// let counter = 0;
function outer() {
    let counter = 0;
    console.log(counter);
    function incrementCounter() { counter++; console.log(counter); }
    return incrementCounter;
}
const myNewFunction = outer();


myNewFunction();
myNewFunction();

console.dir(outer());

const secondFunction = outer();

secondFunction();
secondFunction();

console.dir(window);
counter++;
counter = 0;
console.log(counter); // undefined

secondFunction();

myNewFunction();
