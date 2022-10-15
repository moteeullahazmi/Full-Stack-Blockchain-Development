const fs=require('fs');
const path=require('path');
//logging- keeps track of all functionality
fs.writeFile(path.join(__dirname,"newFile.txt"),"this is a new file , we are writing someting new",
(err)=>{
    console.log('succesfully written to the file!!');
    if(err){
        throw err.name;
    }
})

/*
console.log(__dirname);
console.log(__filename);
*/