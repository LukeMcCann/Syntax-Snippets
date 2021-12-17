#!/usr/bin/env node

'use strict';

import minimist from 'minimist';
import fs from 'fs';
import path from 'path';
import getStdin from 'get-stdin';
import util from 'util';

const args = minimist(process.argv.slice(2), {
    boolean: [ "help", "in"], // help will always be treated as boolean
    string: [ "file", "out" ], // Anything in the file list is always considered a string
});

if (args.help) {
    printHelp();
}
else if (args.file) {
    fs.readFile(path.resolve(args.file), (err, content) => {
        if (err) {
            error(err.toString());
        } else {
            processFile(content.toString());
        }
    });
}
else if (args.out) {
    console.log(args.out);
}
else if (args.in || args._.includes("-")) {
    getStdin()
        .then(processFile)
        .catch(error);
}
else {
    error('Incorrect usage.', true);
}

// **************************************************

function processFile(content) {
    content = content.toUpperCase();
    process.stdout.write(content);
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
    console.log('--out={INPUT}           print to standard output');
    console.log('--in, -                 process stdin');
    console.log('');
}
