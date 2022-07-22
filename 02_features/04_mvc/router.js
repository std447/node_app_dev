const url = require('node:url');
const fs = require('node:fs');

exports.get = (req,res)=>{
     req.requrl = new url(req.url,true);
     const path = req.requrl.path;

     if (/\.(css)$/.test(path)){
        res.writeHead(200,{'Content Type':'text/css'});
        fs.readFile(__dirname+path,'utf8',(err,data)=>{
            if(err) throw err;
            res.write(data,'utf8');
            res.end();
        });
     } else {
        if(path === '/'||path === '/home'){
            require('./controllers/home').get(req,res);
        }else {
            require('./controllers/404').get(req,res);
        }
     }
}