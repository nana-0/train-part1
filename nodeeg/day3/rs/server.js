//入口文件-->调用路由文件(/---index.html  /add---POST  /goget--get  /upload--upload)
//路由文件 通过地址---控制器函数(操作文件 做需求的处理)

var http=require("http");
var url=require("url");
var Router=require("./router.js");

http.createServer(function(req,res){
	//通过url拿到浏览器路径
	var pathname=url.parse(req.url).pathname;
	//根据路径找到处理函数 加载路由文件
	Router.router(req,res,pathname);
}).listen(3000);

console.log("server start port 3000");