setTimeout(function(){
	console.log(123);
},0);

process.nextTick(()=>console.log(1));

new Promise(function(resolve){
	console.log(456);
	resolve();
}).then(()=>console.log(2));

process.nextTick(()=>console.log(3));
Promise.resolve().then(()=>console.log(4));
console.log("end");


//456 end  1 3 2 4 123