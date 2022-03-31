'use strict';

const net = require('net');

const HOSTNAME = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

const socket = net.connect(PORT, HOSTNAME);

socket.write("World");

socket.on('data', (data) => {
    console.log(data.toString());
});
