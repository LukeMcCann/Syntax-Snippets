'use strict';

const net = require('net');

const HOSTNAME = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

net.createServer((socket) => {
    console.log('Client Connected.');
    socket.on('data', (name) => {
        socket.write(`Hello ${name}!`);
    });
})
.listen(PORT, HOSTNAME);
