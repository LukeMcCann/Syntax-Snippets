#!/usr/bin/env node

'use strict';

import minimist from 'minimist';
import fs from 'fs';
import path, { dirname } from 'path';
import util from 'util';
import { fileURLToPath } from 'url';

const args = minimist(process.argv.slice(2), {
    boolean: [ "help", "in"], 
    string: [ "file", "out" ],
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASEPATH =
	path.resolve(process.env.BASEPATH || __dirname);

if (args.help || process.argv.length <= 2) {
	error(null,/*showHelp=*/true);
}
else if (args._.includes("-") || args.in) {
	processFile(process.stdin);
}
else if (args.file) {
    const filePath = path.join(BASEPATH, args.file);
    processFile(
        fs.createReadStream(filePath),
    );
}
else if (args.out) {
    console.log(args.out);
}
else {
	error("Usage incorrect.",/*showHelp=*/true);
}

// **************************************************

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

function processFile(inStream) {
    const outStream = inStream;
    const targetStream = process.stdout;
    outStream.pipe(targetStream);
}

function error(msg, getHelp = false) {
    console.error(msg);

    if (getHelp) {
        console.log('');
        printHelp();
    }
}
