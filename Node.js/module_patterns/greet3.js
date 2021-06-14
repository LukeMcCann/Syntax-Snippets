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
