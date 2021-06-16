'use strict';

// we use the require function to include native modules

const util = require('util');

let name = 'Luke';
let greeting = util.format('Hello %s', name);

console.log(greeting);

// Some native modules are exports of C++ code, others 
// are simply JS code  of common tasks packaged into a usable library
// for convenience.
