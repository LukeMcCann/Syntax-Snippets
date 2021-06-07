'use strict';

const fs = require('fs');

const textInput = fs.readFileSync('File.txt', 'utf-8');

console.log(textInput);

