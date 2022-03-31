'use strict';

const fs = require('fs');

if (process.argv.length > 3) {
    throw new Error(`\n Too many arguments! \n Expected: 1 \n received: ${process.argv.length-2}`);
}

if (process.argv.length < 3) {
    throw new Error(`\n Too few arguments! \n Expected: 1 \n received: 0`);
}

const file = process.argv.pop();

fs.watchFile(file, (current, previous) => {
    console.log(`${file} updated at ${current.mtime}`)
});
