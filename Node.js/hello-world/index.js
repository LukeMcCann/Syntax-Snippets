//jshint esversion:6 
// Tell node we are using es6

/** CD into this directory, run using: node index.js */
// console.log("Hello, world!");

/** Modules must be required before use */
const filesystem = require("fs");
filesystem.copyFileSync("./file1.txt", "./copy.txt");