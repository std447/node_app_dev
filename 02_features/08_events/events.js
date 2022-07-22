const events = require('events');

const emitEvent = new events.EventEmitter();

emitEvent.on('connect',function handler(){
    console.log("Connected to main.....")
});
emitEvent.emit('connect');
console.log("End of Program")