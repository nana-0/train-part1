var http=require("http");
var fs=require("fs");
var url=require("url");

//ico img css js

http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	console.log(pathname);
	var realPath=__dirname+"/statics"+pathname;

	if(pathname=="/favicon.ico"){
		return;
	}else if(pathname=="/" || pathname=="/index"){
		goIndex(res);
	}else{
		//静态资源管理器
		dealWithStatic(pathname,realPath,res);  
		//style.css--->真正的style.css文件打成数据包发回
	}
}).listen(3000);

console.log("server start port 3000");

function goIndex(res){
	var indexPath=__dirname+'/statics/'+url.parse("index.html").pathname;
	var indexData=fs.readFileSync(indexPath);
	res.writeHead(200,{"Content-type":"text/html"});
	res.end(indexData);
}

function dealWithStatic(pathname,realPath,res){
	fs.exists(realPath,function(exists){
		if(!exists){
			res.writeHead(404,{"Content-type":"text/plain"});
			res.end("this request url "+pathname+" was wrong");
		}else{
			var pointPosition=pathname.lastIndexOf(".");
			var mmieString=pathname.substring(pointPosition+1);
			var mmieType;

			//mmieString-->mmieType
			//css   text/css  jpg  image/jpeg

			switch(mmieString){
				case "css" :
					mmieType="text/css";
					break;
				case "jpg" :
					mmieType="image/jpeg";
					break;
				default :
					mmieType:"text/plain";
					break;
			}

			fs.readFile(realPath,"binary",function(err,file){
				if(err){
					res.writeHead(500,{"Content-type":"text/plain"});
					res.end(err);
				}else{
					res.writeHead(200,{"Content-type":mmieType});
					res.write(file,'binary');
					res.end();
				}
			})
		}
	})

}






