'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(`${req.params.year} ${req.params.month}`);
});

// http://localhost:3000/api/posts?read=true&sortBy=date&sortDir=desc
app.get('/api/posts', (req, res) => {
    res.send(req.query);
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});
