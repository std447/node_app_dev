const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('event',function (){
    console.log("some event occured ...")
});
eventEmitter.emit('event');