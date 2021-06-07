'use strict';

const fs = require('fs');

console.log('Processing file read...\n');

fs.readFile('asynchronous.txt', 'utf-8', (err, data) => {
    if (err) {
        return err; 
    }
    console.log(data);
});

// As we are using an async fileRead this will execute
// Whilst FilRead is processing. 
console.log('This will execute first!\n');
