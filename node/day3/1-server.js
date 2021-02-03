var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer(function(req,res){
    //通过浏览器的请求包来加载demo.html
    //console.log(req);
    //console.log(req.method);
    //console.log(req.headers);
    //console.log(req.url);
    //console.log(url.parse(req.url));
    /*
    search: '?name:nana&baba',
    query: 'name:nana&baba',
    pathname: '/aaaa',
    path: '/aaaa?name:nana&baba',
    href: '/aaaa?name:nana&baba'
    */

    var pathname = url.parse(req.url).pathname;
    if(pathname=="/" || pathname=="/index"){
        //读取当前文件到内存 要知道当前文件路径
        //__dirname是全局变量 可以取到当前文件的目录名
        var indexPath = __dirname+"/static/"+url.parse("demo.html").pathname;
        //console.log(indexPath);
        var indexData = fs.readFileSync(indexPath,"utf-8");
        //把内存数据打包成数据包（包头、包体）
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(indexData);
    }
    //console.log()
}).listen(3000);
console.log("server start port 3000");