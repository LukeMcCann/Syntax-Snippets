'use strict'; 

import dotenv from 'dotenv';
import http from 'http';

dotenv.config();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'POST') {
        let body = '';
    
        req.on('data', chunk => {
          body += chunk.toString();
        })
    
        req.on('end', () => {
          if (req.headers['content-type'] === 'application/json') {
            body = JSON.parse(body);
          }
    
          console.log(body);
          res.writeHead(201);
          res.end('ok');
        })
      } else {
        res.writeHead(200);
        res.end('hello from my server');
      }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
