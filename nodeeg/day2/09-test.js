var http=require("http");

urls=["www.qq.com","www.baidu.com","www.sohu.com"];

function fetchPage(url){
	var start=new Date();
	http.get({host:url},function(res){
		console.log("Got respone from "+url);
		console.log("Request Took: ",new Date-start,'ms');
	})
}


for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}


//http四大关键字 GET POST PUT DELETE
//http https ftp smtp pop3 dns