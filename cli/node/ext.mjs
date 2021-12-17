#!/usr/bin/env node

'use strict';

import minimist from 'minimist';
import fs from 'fs';
import path from 'path';

const args = minimist(process.argv.slice(2), {
    boolean: [ "help" ], // help will always be treated as boolean
    string: [ "file" ], // Anything in the file list is always considered a string
    string: [ "out" ]
});

if (args.help) {
    printHelp();
}
else if (args.file) {
    const filepath = path.resolve(args.file);
    processFile(filepath);
}
else if (args.out) {
    console.log(args.out);
}
else {
    error('Incorrect usage.', true);
}

// **************************************************

function processFile(filepath) {
    const content = fs.readFileSync(filepath);
    process.stdout.write(content); // passes a buffer to stdout
                                   // in this case it is better to use
                                   // process.stdout as we don't want
                                   // the overhead console.log(provides)
                                   // to convert the buffer to a value.
}

function error(msg, getHelp = false) {
    console.error(msg);

    if (getHelp) {
        console.log('');
        printHelp();
    }
}

function printHelp() {
    console.log('ex1 usage:');
    console.log('   ex1.js --help');
    console.log('   ex1.js --file={FILENAME}');
    console.log('');
    console.log('--help                  print this help');
    console.log('--file={FILENAME}       process the file');
    console.log('--out={INPUT}          print to standard output');
    console.log('');
}
