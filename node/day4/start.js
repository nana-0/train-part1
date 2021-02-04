var http = require("http");

//var port = 8080;
//var port = process.argv[3];
var port = process.env.npm_package_config_port;

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Hello World");
}).listen(port);
console.log(`server start port ${port}`);