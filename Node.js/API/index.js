'use strict';

const port = 3000;

const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url; 

    if (pathName === '/') {
        res.end('Welcome to Simple API!');
    } else if (pathName === '/api') {
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            // const productData = JSON.parse(data);
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Page Not Found!');
    }
});


server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
