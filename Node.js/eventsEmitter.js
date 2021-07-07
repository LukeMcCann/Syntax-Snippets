'use strict';

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(arg) {
    console.log(arg, 'id:', arg.id, 'url:', arg.url);
});

emitter.emit('messageLogged', {id: 1, url: 'https://'});
