const EmitEvent=require("events");
let eventEmitter=new EmitEvent();

//on indicates what to do when event is triggered from client side
eventEmitter.on('mySimpleEvent',(msg)=>{
    console.log(msg);
    
});

eventEmitter.emit('mySimpleEvent',"First event has occured");