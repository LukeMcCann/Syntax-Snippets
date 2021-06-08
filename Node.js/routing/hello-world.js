'use strict';

const port = 3000;

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url; 

    if (pathName === '/') {
        res.end('Hello World');
    } else {
        res.writeHead(404);
        res.end('Page Not Found!');
    }
});


server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
