'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const server = require('http').createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    switch(url) {
        case '/': 
            res.statusCode = 200;
            res.write('<h1>Hello World</h1>');
            res.end(`<p>Url: ${req.url}</p>`);
            break;
        case '/makeABrew':
            res.statusCode = 418;
            res.end('<h1>418 I\'m a teapot</h1>');
            break;
        default:
            res.statusCode = 404;
            res.end('<h1>404 Not Found!</h1>');
            break;
    }
});

server.listen(port, () => {
    console.log(`Listening on http://${host}/${port}`);
});
