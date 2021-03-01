const dotenv = require('dotenv');
dotenv.config();

var http = require('http');

const port = process.env.PORT;
const host = process.env.HOST;

http.createServer(function (req, res) {
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(8000);

console.log(`Listening on http://${host}:${port}`)
