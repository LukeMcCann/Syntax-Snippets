'use strict';

const port = 3000;

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('Overview Page');
    } else if (pathName === '/product') {
        res.end('Product Page');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'Custom-Header': 'Hello-World'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
