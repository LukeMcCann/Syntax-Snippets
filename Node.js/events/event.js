let EventEmitter = require('events');
let util = require('util');

function Greetr() {
  EventEmitter.call(this); // super
  this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

let greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted: ' + data);
});

greeter1.greet('Tony');
