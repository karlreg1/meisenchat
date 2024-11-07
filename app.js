const http = require('http');
const fs = require('fs');
const express = require('express')


const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        console.log(200);
        fs.readFile('index.html',function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    
    } else {
        // Handle 404 for other routes
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
    }
    
 });


server.listen(8080, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});