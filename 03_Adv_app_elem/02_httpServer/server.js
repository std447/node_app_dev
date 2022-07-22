const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

const portNumber = 3000;

//Create http server
http.createServer((req,res)=>{
    //parse request containing file name
    const pathName = url.parse(req.url).pathname;

    // Print name of requested file
    console.log(`Request for ${pathName} received`);

    // Read requested file content from system
    fs.readFile(pathName.substring(1),(err,data)=>{
        if(err) {
            console.log("Error",err);
            //http status code 404 : page not found
            // Content-Type : text/html
            res.writeHead(404,{'Content-Type':'text/html'})
        }else{
            // Page found [Status code 200 : OK, {'Content-Type': 'text/html'}]
            res.writeHead(200,{'Content-Type':'text/html'});

            // Write content of file to response body
            res.write(data.toString());
            res.end();
        }
    })
}).listen(portNumber,(e)=>{
    console.log(e?`Error ${e}`:`Connected on localhost:${portNumber}`);
})