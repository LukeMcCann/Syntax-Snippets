#!/usr/bin/env node

'use strict';

import minimist from 'minimist';
import fs from 'fs';
import path, { dirname } from 'path';
import util from 'util';
import { fileURLToPath } from 'url';
import { Transform } from 'stream';

const args = minimist(process.argv.slice(2), {
    boolean: [ "help", "in", "out"], 
    string: [ "file" ],
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASEPATH =
	path.resolve(process.env.BASEPATH || __dirname);

const OUTFILE = 
    path.join(BASEPATH, "out.txt");

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
    console.log('--in, -                 process stdin');
    console.log('--out                   print to stdout');
    console.log('');
}

function processFile(inStream) {
    let outStream;

    // Here we step in between our streams
    // to do something transformative with
    // our data, we run the transform function
    // which works similar to an array. 
    // we ush our chunk through our transform, 
    // remembering that at this point it is binary
    // data (a buffer) and we need to convert it
    // to a string. We then upperCase our string,
    // and run our callBack (next). 
    const upperStream = new Transform({
        transform(chunk, encoding, next) {
            this.push(
                chunk.toString().toUpperCase(),
            );
            // Uncomment to delay - you will see how 
            // we are processing our data chunk by chunk
            // setTimeout(next, 500);
            next();
        },
    });

    // We then pipe our readable stream 
    // into our writeable, this returns
    // a new readable stream which is
    // our output stream.
    outStream = inStream.pipe(upperStream);

    let targetStream;

    if (args.out) {
        targetStream = process.stdout;
    } else {
        targetStream = fs.createWriteStream(OUTFILE);
    }
    outStream.pipe(targetStream);
}

function error(msg, getHelp = false) {
    console.error(msg);

    if (getHelp) {
        console.log('');
        printHelp();
    }
}
