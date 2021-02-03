var fs=require("fs");
var http=require("http");

http.createServer(function(req,res){
	/*
	var data=fs.readFileSync('./demo1.txt','utf-8');
	res.writeHead(200,{"Content-type":"text/plain"});  //mime 
	res.end(data);*/

	//fs.createReadStream("./demo1.txt").pipe(res);
	fs.createReadStream("./demo1.txt").pipe(process.stdout);
}).listen(3000);

console.log("server start port 3000");