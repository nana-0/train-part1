var http=require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("<h1>hello world</h1>");
}).listen(3000);

console.log("server start port 3000");


//webServer  任何一个服务队外都要开放端口
//www.163.com:8080   
//收发数据包:请求包(request--req) chrome->server  响应包(response--res) server-->chrome
//包:包头、包体   传输 包头 writeHead 包体 write 结包 end
//200 404 500 503 301 304
