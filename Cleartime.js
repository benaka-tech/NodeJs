console.log("clear timers");
var timeoutObj=setTimeout(()=>{
console.log('timeout beyond time');
},1500);

var immediateObj = setImmediate(()=>{
console.log('immediately executing immediate');
});

var intervalObj = setInterval(()=>{
console.log('interviewing the interval');
},500);
//clearTimeout(timeoutObj);
//clearImmediate(immediateObj);
clearInterval(intervalObj);