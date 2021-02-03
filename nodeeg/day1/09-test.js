//fs.stat  检测是文件还是目录

var fs=require("fs");

/*
fs.stat("html",function(err,stats){
	if(err){
		console.log(err);
		return false;
	}else{
		console.log("文件:"+stats.isFile());
		console.log("目录:"+stats.isDirectory());
	}
})

//fs.exists  fs.access判断目录和文件是否存在(可读写权限)
fs.access('./demo.txt',function(err){
	console.log(err ? '目录和文件不存在' : '文件存在可读写');
})*/

//mkdir创建目录
/*
fs.mkdir("css",function(err){
	if(err){
		console.log(err);
		return false;
	}else{
		console.log("创建目录成功");
	}
})*/

//fs.writeFile 写入文件(会覆盖之前文件)(如果不存在这个文件马上创建)
/*
fs.writeFile("123.txt","你好2021","utf-8",function(err){
	if(err){
		console.log(err);
		return false;
	}else{
		console.log("写入成功");
	}
})*/

/*
fs.appendFile("123.txt","幸福的一年",function(err){
	if(err){
		console.log(err);
		return false;
	}else{
		console.log("追加成功");
	}
})*/

fs.rename("html/index.html","html/news.html",function(err){
	if(err){
		console.log(err);
		return false;
	}else{
		console.log("修改名字成功");
	}
})

//fs.rmdir 删除目录  fs.unlink 删除文件




























