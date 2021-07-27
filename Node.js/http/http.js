'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const server = require('http').createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

server.listen(port, () => {
    console.log(`Listening on http://${host}/${port}`);
});
