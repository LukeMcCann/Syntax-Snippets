'use strict';

const fs = require('fs');

const file = process.argv[2];

const printMetaData = (file) =>{
    const fileStats = fs.statSync(file);
    console.log(fileStats);
};

printMetaData(file);
