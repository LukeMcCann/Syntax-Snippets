'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {

    }

    if (req.url === '/api/courses') {
        
    }
});

server.listen(port)
