'use strict';

// you can also replace the exports
// object with a custom object
// by constructing an object via 
// a function constructor. In this manner
// you may then access the methods on the exported object.
function Greeter() {
    this.greeting = 'Hello world!';
    this.greet = () => {
        console.log(this.greeting);
    }
}

module.exports = new Greeter();


// This method can cause some confusion in modules
// for instance, if we require in the file,
// then update greeting: "greet.greeting = 'changed greeting';
//
// Which greeting will we see on the new require?
// Coming from an object oriented background
// you would likely think it would be the original 
// message as you would expect this to be a new instance.
// However, in JS this is not the case and the second item
// would also return the changed greeting.
//
// This is because, in the V8 engine, require caches
// the result of the require function for any
// particular filename.
//
// In this case, because greeter is an object, 
// it ends up as the same reference in memory
// (remember objects are passed by reference
// while primitives are passed by value).
