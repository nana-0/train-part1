var fs=require("fs");  //zip rar tar tar.gz bz2
var zlib=require("zlib");
//sdemo.txt压缩成gz包

fs.createReadStream("./sdemo.txt")
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("sdemo.txt.gz"));

console.log("文件压缩完成");