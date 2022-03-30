'use strict';

const fs = require('fs');

const file = process.argv[2];

const printMetaData = (file) =>{
    try {
        const fileStats = fs.statSync(file);
        console.log(fileStats);
    } catch(err) {
        console.err("Error reading file path:". file);
    }
};

printMetaData(file);
