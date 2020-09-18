var events = require('events');
var eventEmitter = new events.EventEmitter();
//Create an event handler:
var myEventHandler = function () {
  console.log('message logged in');
}

//Assign the event handler to an event:
eventEmitter.on('log', myEventHandler);

//Fire the 'log' event:
eventEmitter.emit('log');
