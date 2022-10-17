const express= require('express');

//app is an object used to interact with express functionality
const app=express();

app.get('/',(req,res)=>{
    if (req.url==='/'){
    res.send("hello how are you");
    }
});

app.get('/ineuron/courses',(req,res)=>{
    res.send(["Blockchain","Web dev","devops","data science"]);
});

//year and month are req parameters

app.get('/ineuron/courses/:year/:month',(req,res)=>{
    res.send(req.params);
});
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`listening on port${port}`));