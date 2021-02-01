// const buf1 = Buffer.alloc(10);
// console.log(buf1);

// const buf2 = Buffer.alloc(10,2);
// console.log(buf2);

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

// const buf4 = Buffer([1,2,3]);
// console.log(buf4);

// const buf4 = Buffer.from([1,2,3]);
// console.log(buf4);

// const buf5 = Buffer("hello","utf-8");
// console.log(buf5);

// const buf6 = Buffer.from("hello","ascii");
// console.log(buf6.toString("hex"));

const buf7 = Buffer.from("http://www.baidu.com/1.rmvb","ascii");
console.log(buf7.toString("base64"));

//thunder://aHR0cDovL3d3dy5iYWlkdS5jb20vMS5ybXZi