'use strict';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch (req.url) {
        case '/': 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    const data = fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(err);
        }
        res.end(data);
    });
});

server.listen(port, host, () => {
    console.log(`Listening on: http://${host}:${port}`)
});
