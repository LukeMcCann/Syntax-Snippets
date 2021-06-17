// ES6 (or ES2015) has it's own version of modules
// This does not mean node modules are going anytime soon
// there is still a large ecosystem for node modules/

// To use ES6 modules we use the export keyword

export function greet() {
    console.log('Hello');
}

// in app.js we ca then import anything exported

import * as greetr from 'greet';
