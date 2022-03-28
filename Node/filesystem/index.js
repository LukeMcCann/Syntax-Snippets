'use strict';

const fs = require('fs');
const path = require('path');

const filepath = path.join(process.cwd(), 'hello.txt');

const contents = fs.readFileSync(filepath, 'utf8');

console.log(contents);
