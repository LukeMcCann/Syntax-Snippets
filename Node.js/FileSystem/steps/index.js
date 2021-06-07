'use strict';

const fs = require('fs');

fs.readFile('start.txt', 'utf-8', (err, data) => {
    if (err) {
        return err;
    }

    fs.readFile(`${data}`, 'utf-8', (err, data2) => {
        if (err) {
            return err;
        }

        console.log(data2);
    });
});

console.log('This will run\n');
