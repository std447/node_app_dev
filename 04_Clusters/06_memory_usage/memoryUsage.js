const num = 1000000;

for(let i = 0; i<num;i++){
console.log("Hare Krishna!!!");
console.clear();
console.log({i});
}

const used  = process.memoryUsage()
for(let key in used){
    console.log(`${key} ${Math.round(used[key]/1024/1024*100)/100} MB`)
}