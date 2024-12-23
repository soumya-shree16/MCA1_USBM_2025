//import modules
const http=require("http");
const os=require("os");
const fs=require("fs");
const path=require("path");


const server=http.createServer((req,res)=>{
    if((req.url="/")){
       // res.statusCode(201).end()
       res.writeHead(200);
       res.end("home page");
    }else if(req.url==="/contact"){
        res.writeHead(200);
        res.end("contact page");
    }else if(req.url==="/service"){
        res.writeHead(200);
        res.end("service page");
    }else if(req.url==="/signup"){
        res.writeHead(200);
        res.end("signup page");
    }
    
   
})

server.listen(4000,()=>{
    console.log("server is running on 4000");
    
})