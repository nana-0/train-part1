var fs=require("fs");

var data=fs.readFileSync("./demo1.txt","utf-8");   //同步会产生阻塞
console.log(data);
console.log("end");

fs.readFile("./demo1.txt","utf-8",function(err,data){  //当前进程空闲,达到触发条件
	if(err){   //磁盘IO 时间IO 自定义事件
		console.log(err);
		return false;
	}else{
		console.log(data);
	}
})
console.log("end");