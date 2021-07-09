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

const Joi = require('joi'); // Validation package - returns a class Joi
const express = require('express');
const { reset } = require('nodemon');
const app = express();

// enable parsing of JSON objects in body of request
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Index');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    !course ? res.status(404).send('404 Not Found.') : res.send(course);
});

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    res.status(201).send(course)
});


app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});
