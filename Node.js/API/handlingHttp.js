'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const courses = [
    { id: 1, name: 'Software Engineering' },
    { id: 2, name: 'Computer Science' },
    { id: 3, name: 'Robotics' },
    { id: 4, name: 'Artificial intelligence' },
    { id: 5, name: 'Machine Learning' },
    { id: 6, name: 'Theoretical Physics'}
];

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    !course ? res.status(404).send('404 Not Found.') : res.send(course);
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});
