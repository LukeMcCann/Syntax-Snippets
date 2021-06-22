'use strict';

const Emitter = require('events');
const eventConfig = require('./config').events;
const util = require('util');

function Greetr() {
    this.greeting = 'Hello World';
}

util.inherits(Greetr, Emitter);

Greetr.prototype.greet = function () {
    console.log(this.greeting);
    this.emit('greet');
}

let gr1 = new Greetr();

gr1.on('greet', () => {
    console.log('Someone greeted!');
});

gr1.greet();
