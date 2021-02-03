
// http://localhost/test?name=nana&age=18
// url.parse-->object  query=name=nana&age=18  pathname=/test
var http = require("http");
var url = require("url");
var querystring = require("querystring");//查询字符串

http.createServer(function (req,res) {
    //console.log(url.parse(req,url));

    //var paramStr = url.parse(req.url).query;
    //console.log(paramStr);
    //var paramObj = paramStr.split("&");
    //console.log(paramObj);
    //var arrobj = paramObj[0].split("=");
    //console.log(arrobj[1]);

    var paramStr = url.parse(req.url).query;
    
    var paramObj = querystring.parse(paramStr);//字符串转对象
    console.log(paramObj);

}).listen(3000);

console.log("server start port 3000");