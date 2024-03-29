#!/usr/bin/env node

'use strict';

import { fileURLToPath } from 'url';
import { Transform } from 'stream';

import path, { dirname } from 'path';

import minimist from 'minimist';
import fs from 'fs';
import util from 'util';
import zlib from 'zlib';

const args = minimist(process.argv.slice(2), {
    boolean: [ "help", "in", "out", "compress", "decompress"], 
    string: [ "file" ],
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASEPATH =
	path.resolve(process.env.BASEPATH || __dirname);

let OUTFILE = 
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
    console.log('ex3 usage:');
    console.log('   ex3.js --help');
    console.log('   ex3.js --file={FILENAME}');
    console.log('');
    console.log('--help                  print this help');
    console.log('--file={FILENAME}       process the file');
    console.log('--in, -                 process stdin');
    console.log('--out                   print to stdout');
    console.log('--compress              gzip the output');
    console.log('--decompress              unzip gzip input');
    console.log('');
}

function processFile(inputStream) {
    let stream = inputStream;
    let outStream;

    if (args.decompress) {
        let gunzipStream = zlib.createGunzip();
        stream = stream.pipe(gunzipStream);
    }

    const upperCaseStream = new Transform({
        transform(chunk, encoding, next) {
            this.push(
                chunk.toString().toUpperCase(),
            );
            next();
        },
    });

    stream = stream.pipe(upperCaseStream);

    if (args.compress) {
        OUTFILE = `${OUTFILE}.gz`;
        const gzipStream = zlib.createGzip();
        stream = stream.pipe(gzipStream);
    }

    if (args.out) {
        outStream = process.stdout;
    } else {
        outStream = fs.createWriteStream(OUTFILE);
    }
    stream.pipe(outStream);
}

function error(msg, getHelp = false) {
    console.error(msg);

    if (getHelp) {
        console.log('');
        printHelp();
    }
}
