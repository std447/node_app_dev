function tryMe(){
    
    console.log('Some Message');

}

const startTime = new Date().getTime();
console.time('setTimeout')
setTimeout(tryMe,2000)
console.timeEnd('setTimeout');
const endTime = new Date().getTime();
console.log(endTime-startTime);