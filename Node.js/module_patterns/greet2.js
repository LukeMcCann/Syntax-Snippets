'use strict';

// You can also add a property to the exports object
// when calling this in the app.js you can then either
// access the property by calling greet.greet(), or
// more commonly access the specific property on the require.
module.exports.greet = () => {
    console.log('Hello World');
}
