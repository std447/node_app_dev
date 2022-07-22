const fs = require('node:fs');

let content = "Some Message";

const stream = fs.createWriteStream('mylog1.txt','utf8');
stream.write(content,'utf8');
stream.end();

stream.on('finish',()=>console.log('Data written'));
console.log("Stream closed and data written");