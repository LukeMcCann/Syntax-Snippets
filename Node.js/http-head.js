'use strict';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><title>Hello</title> <link rel="stylesheet" href="#"></head>')
    res.write(`<h1></h1>Hello ${req.url}</h1>`);
    res.write('<p>Hello again!</p>');
    res.end();
});

server.listen(port, host, () => {
    console.log(`Listening on: http://${host}:${port}`)
});
