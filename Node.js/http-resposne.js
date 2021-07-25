'use strict';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const data = fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            res.write('404 Not Found!');
            res.end();
        }
        res.write(data);
        res.end();
    });
});

server.listen(port, host, () => {
    console.log(`Listening on: http://${host}:${port}`)
});
