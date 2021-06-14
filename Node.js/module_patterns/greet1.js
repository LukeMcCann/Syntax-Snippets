'use strict';

// Exports is an empty object when we first access it
// here we are overwriting that empty object with a function
module.exports = () => {
    console.log('Hello World');
}
