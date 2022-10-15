//file system
//file system- fs module
//install node js- fs module will be installed
//abstraction
const fs= require("fs");

fs.readFile("demo.txt",'utf-8',(err,data)=>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data);
    }
})

