var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// listener #3
var listner3 = function listner3() {
  console.log('listner3 executed.');
 }

var listner4 = function listner4() {
  console.log('listner4 executed.');
 }
// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

eventEmitter.once('connection', listner3);
eventEmitter.on('connection', listner4);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Listner3 will not listen now.");

// Fire the connection event 
// Remove the binding of listner1 function
eventEmitter.off('connection', listner1);
eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.removeAllListeners('connection');
eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
