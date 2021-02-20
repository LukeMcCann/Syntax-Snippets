//jshint esversion:6

const express = require('express');
const app = express(); // express module

const port = '3001';

app.get('/', function (request, response) {
    response.send('<h1>Hello</h1>');
}); // Express method to specify the action to take when a request is received

app.get("/contact", function (request, response) {
    response.send('<p>Contact me</p>');
});

app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});
