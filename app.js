const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    fs.readFile('index.html',function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        });
    console.log("log");
});
server.listen(8080);