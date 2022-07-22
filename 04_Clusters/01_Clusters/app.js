const cluster = require('node:cluster');
const http = require('node:http');
const numcpus = require('node:os').cpus().length;

if(cluster.isMaster){
    for (let i = 0; i<numcpus;i++){
        cluster.fork();
    }
}

if (cluster.isWorker){
    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('You are using>: '+cluster.worker.id);
    }).listen(3000);
}