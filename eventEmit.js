const EventEmitter=require('events');

class MyEmitter extends EventEmitter{
    
}

const MyEmitt=new MyEmitter();

MyEmitt.on('event',()=>{
    console.log('Event has occured');
});

MyEmitt.emit('event');