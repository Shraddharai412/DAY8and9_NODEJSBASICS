// type 1 webserver using http module


// var http=require('http');
// var host ='127.0.0.1';
// var port = 3000;
// var server = http.createServer(function(req,res){
//  res.writeHead(200);
//    res.end('Hello World\n');
// });
// server.listen(port,host,function(){
//     console.log('server running at http://'+host+':'+port+'/');
   
// })

//type 2 webserver with routing
// var http =require('http');
// var host='127.0.0.1';
// var port = 3000;
// var server= http.createServer(function(req,res){
//     if(req.url == '/')
//     {
//         res.writeHead(200);
//         res.write("welcome to home page");
//         res.end();
//     }
//     else if(req.url == '/about')
//     {
//         res.writeHead(200);
//         res.write("welcome to about page");
//         res.end();
//     }
//     else
//     {
//         res.writeHead(404);
//         res.write("Page not found");
//         res.end();
//     }

// });
// server.listen(port,host,function(){
//     console.log('server running at http://'+host+':'+port+'/');
   
// })

const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello welcome to nodejs class\n');

})

server.listen(3000,()=>{
    console.log("server is running at local host http://localhost:3000");
})