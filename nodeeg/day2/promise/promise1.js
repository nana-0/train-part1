function demo(callback){
	setTimeout(function(){
		var name="zhangsan";
		callback(name);
	})
}


demo(function(name){
	console.log(name);
})