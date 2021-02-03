//文件流的方式处理文件  文件读取流 和  文件写入流

const fs=require("fs");

var rs=fs.createReadStream('./demo1.txt');
var ws=fs.createWriteStream('./sdemo.txt');

rs.pipe(ws);  //管道
/*
rs.on("data",function(chunk){
	console.log(chunk.length);
	ws.write(chunk);
})

rs.on("end",function(){
	console.log("结束了");
	ws.end();
})*/
