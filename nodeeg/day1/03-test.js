// 1byte=8bit  1int=4byte---buffer fs  stream(ASCII latin1 utf-8 unicode)
//文件编码 浏览器解码 数据库编码

const buf1=Buffer.alloc(10);
console.log(buf1);

const buf2=Buffer.alloc(10,1);
console.log(buf2);

const buf3=Buffer.allocUnsafe(10);
console.log(buf3);

//const buf4=Buffer([1,2,3]);
//console.log(buf4);
const buf4=Buffer.from([1,2,3]);
console.log(buf4);

const buf5=Buffer.from("test","latin1");
console.log(buf5);

const buf6=Buffer.from("helllo world","ascii");
console.log(buf6.toString("hex"));

const buf7=Buffer.from("http://www.163.com/1.rmvb","ascii");
console.log(buf7.toString("base64"));

//thunder://aHR0cDovL3d3dy4xNjMuY29tLzEucm12Yg==

//针对于原生模块:用require加载、自动加载
//global buffer console process module exports  timer
















