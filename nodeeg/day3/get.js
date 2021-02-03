//http://localhost/test?name=laofeng&age=19
//url.parse---> object  query=name=laofeng&age=19  pathname=/test
var http=require("http");
var url=require("url");
var querystring=require("querystring");

http.createServer(function(req,res){
	//console.log(url.parse(req.url));
	//JSON.parse JSON.stringfy
	/*
	var paramStr=url.parse(req.url).query;
	//console.log(paramStr);
	var paramObj=paramStr.split("&");
	//console.log(paramObj);
	var arrobj=paramObj[0].split("=");
	console.log(arrobj[1]);*/

	var paramStr=url.parse(req.url).query;

	var paramObj=querystring.parse(paramStr);
	console.log(paramObj);
}).listen(3000);

console.log("server start port 3000");