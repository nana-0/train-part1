setImmediate(function(){
	console.log('setImmediate延迟执行1');
	process.nextTick(function(){
		console.log("强势插入");
	})
})

setImmediate(function(){
	console.log('setImmediate延迟执行2');
})

setTimeout(function(){
	console.log("setTimeout");
},0);

process.nextTick(function(){
	console.log("nextTick延迟执行1");
})

process.nextTick(function(){
	console.log("nextTick延迟执行2");
})

console.log("正常执行");

//同步-->异步第一个时间片-->异步第二个时间片