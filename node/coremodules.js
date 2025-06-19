
//var module=require(/module_name/);

const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello welcome to nodejs class\n');

})

server.listen(3000,()=>{
    console.log("server is running at local host http://localhost:3000");
})