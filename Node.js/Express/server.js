//jshint esversion:6

const express = require('express');
const app = express(); // express module

const port = '3001';

console.log(`Listening on port: ${port}`);
app.listen(port);