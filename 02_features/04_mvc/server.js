const http = require('node:http');
const portNumber = 3000;
const start = http.createServer((req,res)=>{
    require('./router.js').get(req,res);
});
start.listen(portNumber,(err)=>{
    if(err) console.error("Error: ",err);
    console.log("Listening to localhost",portNumber);
});

exports.start = start;