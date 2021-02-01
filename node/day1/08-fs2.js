//文件流的方式处理方式 文件读取流 文件写入流

const fs = require("fs");
var rs = fs.createReadStream('./07-text.txt');
var ws = fs.createWriteStream('./08-text2.txt');

// rs.on("data",function (chunk) {
//     console.log(chunk.length);
//     ws.write(chunk);
// })
// rs.on("end",function () {
//     console.log("结束了");
//     ws.end();
// })

rs.pipe(ws);//管道 支持链式操作 jq支持链式操作
