function getData(resolve,reject){
	console.log(123);

	setTimeout(function(){
		var name="zhangsan";
		resolve(name);
	},1000);

	console.log(456);
}

var p=new Promise(getData);
p.then(function(name){
	console.log(name);
})