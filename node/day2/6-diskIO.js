//前面的触发都是时间io
//触发磁盘io：本地  网络
//本地  读取file.txt,停2s 然后输出
/*
var fs = require("fs");

fs.readFile("./file.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        getData(data);
    }
});

function getData(data){
    setTimeout(function(){
        console.log(data);
    },2000);
}
*/

//网络

var http = require("http");

urls = ["www.qq.com","www.sohu.com","www.baidu.com"];

function fetchPage(url){
    var start = new Date();
    http.get({host:url},function(res){
        console.log("Got respone from "+url);
        console.log("Request Took:",new Date()-start,'ms')
    });
}

for(var i = 0;i<urls.length;i++){
    fetchPage(urls[i]);
}
//http四大关键字：GET POST PUT DELETE