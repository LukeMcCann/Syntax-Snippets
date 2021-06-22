'use strict';

const Emitter = require('events');
const eventConfig = require('./config').events;

let emt = new Emitter();

emt.on(eventConfig.GREET, () => {
    console.log('Hello World');
});

emt.emit('greet');
