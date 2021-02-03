//server加载index.html 

var http=require("http");
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");

http.createServer(function(req,res){
	//接收req的get请求获取请求地址
	var pathname=url.parse(req.url).pathname;
	if(pathname=="/"){
		//处理主页加载
		goIndex(res);
	}else if(pathname=="/parse"){
		//处理post请求
		//console.log(res);
		goPost(req,res);
	}else if(pathname=="/img"){
		goImg(res);
	}else{
		//返回一个404的处理
		goFault(res);
	}
}).listen(3000);

console.log("server start port 3000");

function goIndex(res){
	var indexPath=__dirname+"/static/"+url.parse("index.html").pathname;
	var indexData=fs.readFileSync(indexPath,"utf-8");
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexData);
}

function goFault(res){
	res.writeHead(404,{"Content-type":"text/plain"});
	res.end("The page is noting");
}


function goPost(req,res){
	//req--->server传输数据  数据一段一段 监听(data) 监听(end)
	//1、定义全局变量
	var postData="";
	//2、确定传输数据编码
	req.setEncoding('utf8');
	//3、开始监听req传输过来的data关键字  on once addListener
	req.addListener("data",function(postDataChunk){
		postData+=postDataChunk;
	});

	req.addListener("end",function(){
		//console.log(postData);
		var ParamObj=querystring.parse(postData);
		var str="name="+ParamObj.username+" book="+ParamObj.bookname;
		res.writeHead(200,{"Content-type":"text/plain"});
		res.end(str);
	})
}


function goImg(res){
	//返回一个图片
	var imgPath=__dirname+"/static/"+url.parse("123.jpg").pathname;
	var imgData=fs.readFileSync(imgPath);
	res.writeHead(200,{"Content-type":"image/jpeg"});
	res.end(imgData);
}




















