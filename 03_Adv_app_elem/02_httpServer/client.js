const http = require('node:http');

const opt = {
    host:'localhost',
    port:3000,
    path:'data.html'
}


const callBack = function(res) {
    let body = '';
    res.on('data', data => body+=data)

    res.on('end',()=> console.log(body))
}