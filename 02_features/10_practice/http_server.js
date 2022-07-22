const http = require('node:http');

const httpPortNumber = 3000;

const message = "My Message"

http.createServer((request,response)=>{
    response.write(message);
    response.end()
}).listen(httpPortNumber,(e)=>{
    e?console.log("Error:",e):console.log("Connected on localhost:"+httpPortNumber);
});