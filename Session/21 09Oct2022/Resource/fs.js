//file system module
//reading files, writing inside files
//perform calculations or modifications on files
//text files
//reading file

const fs=require("fs");

fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data);
    }
})
