'use strict';

const fs = require('fs');

const textIn = fs.readFileSync('File.txt', 'utf-8');

const textOut = `${textIn} \n and we can now write to it 😄 \n Created on ${Date.now()}`;

fs.writeFileSync('output.txt', textOut);

console.log('Content written to file');
