const EventEmitter=require('events');
const myEmitter=new EventEmitter();
myEmitter.on('greet',()=>{
    console.log('Hello, welcome to the event emitter example!');

})
myEmitter.emit('greet');