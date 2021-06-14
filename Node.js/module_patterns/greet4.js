'use strict';

// If we want to pass an object,
// without creating a reference
// to the same object in memory,
// we can do so by passing the 
// object to exports without
// invoking it.
function Greeter() {
    this.greeting = 'Hello world!';
    this.greet = () => {
        console.log(this.greeting);
    }
}

module.exports = new Greeter;
