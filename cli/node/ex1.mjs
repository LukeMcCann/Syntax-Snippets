#!/usr/bin/env node

'use strict';

import minimist from 'minimist';
import fs from 'fs';
import path, { dirname } from 'path';
import getStdin from 'get-stdin';
import util from 'util';
import { fileURLToPath } from 'url';

const args = minimist(process.argv.slice(2), {
    boolean: [ "help", "in"], 
    string: [ "file", "out" ],
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASEPATH =
	path.resolve(process.env.BASE_PATH || __dirname);


if (args.help || process.argv.length <= 2) {
	error(null,/*showHelp=*/true);
}
else if (args._.includes("-") || args.in) {
	getStdin().then(processFile).catch(error);
}
else if (args.file) {
	let filePath = path.join(BASEPATH,args.file);
	fs.readFile(filePath,function(err,contents){
		if (err) error(err.toString());
		else processFile(contents.toString());
	});
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
