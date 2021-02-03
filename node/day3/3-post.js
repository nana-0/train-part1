//server加载index.html

var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

http.createServer(function(req,res){
    //接收req的get请求地址
    var pathname = url.parse(req.url).pathname;
    if(pathname =="/"){
        //处理主页加载
        goIndex(res);
    }else if(pathname == "/parse"){
        //处理post请求
        goPost(req,res);
    }else if(pathname=="/img"){
        goImg(res);
    }
    else{
        //返回一个404的处理
        goFault(res);
    }
}).listen(3000);

console.log("server start port 3000");

function goIndex(res) {
    var indexPath = __dirname+"/static/"+url.parse("index.html").pathname;
    var indexData = fs.readFileSync(indexPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexData);
}

function goFault(res){
    res.writeHead(404,{"Content-type":"text/plain"});
    res.end("the page is loading");

}
function goPost(req,res){
    console.log("post");
    //req-->server传输数据 数据一段一段 监听（data）监听（end）
    //1.定义一个全局变量
    var postData = "";
    //2.确定传输的数据编码
    req.setEncoding('utf8');
    //3.当前服务器开始监听req传过来的data关键字  on  once addListener
    req.addListener("data",function (postDataChunk) {
        postData+=postDataChunk;
    });
    req.addListener("end",function () {
        //console.log(postData);
        var ParamObj = querystring.parse(postData);
        var str = "name="+ParamObj.username+" book="+ParamObj.bookname;
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end(str);
    });
}

function goImg(res) {
    //返回一个图片 
    var imgPath = __dirname+"/static/"+url.parse("cat1.jpg").pathname;
    var imgData = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-type":"image/jpg"});
    res.end(imgData);
    
}