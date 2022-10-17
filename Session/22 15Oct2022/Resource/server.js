const http=require('http');

//createServer- method- creates http server
//www.google.com/ineuron
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("hello, this is http server response\n");
        res.end();
    }
    if(req.url==='/ineuron/courses'){
    res.write(JSON.stringify(['Blockchain','data science','web development','java','testing']));
    res.end();
}
});

server.listen(5001);
console.log('listening on port 5001');
