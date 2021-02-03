//如何把异步转换成同步--使用原生的转换方式
for(var i=0;i<10;i++){
	var m=i;
	/*
	setTimeout(function(){
		console.log(m);
	},200);*/
	//exec(m);
	exec(m,function(m){
		console.log(m);
	})
}

//9 9 9 9 9----
//0~9

function exec(param,callback){
	setTimeout(function(){
		callback(param);
	},200);
}

/*
function exec(m){
	setTimeout(function(){
		console.log(m);
	},200);
}*/