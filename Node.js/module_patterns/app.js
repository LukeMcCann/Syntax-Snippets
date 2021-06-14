'use strict';

let greet = require('./greet1');

greet();

let greet2 = require('./greet2').greet;

greet2();

let greeter = require('./greet3');

greeter.greet();

let greeter2 = require('./greet4');

greeter2.greet();
