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
            break;
        case '/about':
            path += 'about.html';
            break;
        default: 
            path += '404.html';
            break;
    }

    const data = fs.readFile(path, (err, data) => {
        if (err) {
            res.end(err);
        }
        res.end(data);
    });
});

server.listen(port, host, () => {
    console.log(`Listening on: http://${host}:${port}`)
});
