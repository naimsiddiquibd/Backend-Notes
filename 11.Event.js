const events = require('events');
// console.log(events);
const eventEmitter = new events.EventEmitter();

//Creating an event handler
const laptop = () => {
    console.log("Do some math");
}

// Assign the handler into an event
eventEmitter.on('scream', laptop).laptop

/// Firing the event
eventEmitter.emit('scream');