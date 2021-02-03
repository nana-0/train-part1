//创建promise new Promise
//Promise同步不因为resolve和reject阻塞 async/await会阻塞
var p=new Promise(function(resolve,reject){
	var name="lisi";
	if(Math.random()<0.7){
		console.log(123);
		resolve(name);
		console.log(456);
	}else{
		reject('失败');
	}
})

p.then(function(name){
	console.log(name);
})