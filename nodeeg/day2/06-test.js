//setTimeout setInterval process.nextTick setImmediate

console.log("start");

setTimeout(function(){
	console.log(123);
})

process.nextTick(function(){
	console.log(456);
})

setImmediate(function(){
	console.log(789);
})


console.log("end");

//执行同步代码 start end  456  123  789
//同步向异步切换时间片 process.nextTick
//setTimeout  setImmediate