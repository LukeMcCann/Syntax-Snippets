'use strict';

const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
});

app.listen(port, () => {
    console.log(`Listening on http://${host}:${port}`);
});
