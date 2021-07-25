'use strict';

const server = require('http').createServer((req, res) => {
    console.log(`Request made...`);
});


server.listen(3000, 'localhost', () => {
    console.log(`Listening on port 3000`);
});
