'use strict';

// we use the require function to include native modules

const util = require('util');

let name = 'Luke';
let greeting = util.format('Hello %s', name);

util.log(greeting);

// Some native modules are exports of C++ code, others 
// are simply JS code  of common tasks packaged into a usable library
// for convenience.

// Since you must specify the path/location when specifying custom modules
// custom modules are able to have the same name as Native modules.
