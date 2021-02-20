// const buf1 = Buffer.alloc(10);
// console.log(buf1);
// <Buffer 00 00 00 00 00 00 00 00 00 00>

// const buf2 = Buffer.alloc(10,1);
// console.log(buf2);
// <Buffer 01 01 01 01 01 01 01 01 01 01>

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);
// <Buffer 00 00 00 00 00 00 00 00 00 00>

// const buf4 = Buffer.from([1,2,3]);
// console.log(buf4);
// <Buffer 01 02 03>

// const buf5 = Buffer.from([257,1.2,-255]);
// console.log(buf5);
// <Buffer 01 01 01>

// const buf6 = Buffer.from("hello","utf-8");
// console.log(buf6);
// <Buffer 68 65 6c 6c 6f>

// const buf7 = Buffer.from("hello","ascii");
// console.log(buf7);
// <Buffer 68 65 6c 6c 6f>

// const buf8 = Buffer.from("http://www.baidu.com","ascii");
// console.log(buf8.toString("base64"));
// aHR0cDovL3d3dy5iYWlkdS5jb20=