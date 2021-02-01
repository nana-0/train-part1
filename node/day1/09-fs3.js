var fs = require("fs");
var http = require("http");

http.createServer(function (req,res) {
    // var data = fs.readFileSync("./07-text.txt",'utf-8');
    // res.writeHead(200,{"Content-type":"text/plain"});
    // res.end(data);

    //fs.createReadStream("./07-text.txt",'utf-8');
    fs.createReadStream("./08-text2.txt",'utf-8').pipe(process.stdout);
}).listen(3000);

console.log("server start port 3000");