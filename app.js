const http = require('http');
const fs = require('fs');

const server = http.createServer((res, req)=>{
    fs.readFile('index.html',function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        });
});
server.listen(8080);