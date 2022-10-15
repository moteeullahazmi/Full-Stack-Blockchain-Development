const fs=require("fs");
fs.readFile('dem.txt','utf-8',(err,data)=>{
    if(err){
        throw err.name;
    }
    console.log(data);
})
//asynchronous nature ensures non blocking io
process.on("uncaughtException",err=>{
    console.error(`there is some uncaught error that needs to be checked${err}`);
    process.exit();
})
console.log("this part will be printed last");