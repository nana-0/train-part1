// const buf = Buffer.from("nana");
// for(const b of buf){
//     console.log(buf);
// }
//buf.values() buf.keys() buf.entries()
// for(const value of buf.entries()){
//     console.log(value);
// }
// const str = "http://nodejs.cn";
// const buf1 = Buffer.allocUnsafe(str.length);

// for(let i = 0;i<str.length;i++){
//     buf1[i] = str.charCodeAt(i);
// }
// console.log(buf1.toString('ascii'));

// const buf2 = Buffer.allocUnsafeSlow(26);
// const buf3 = Buffer.allocUnsafeSlow(26).fill("!");
// console.log(buf2);
// console.log(buf3.toString("ascii"));

// for(let i = 0;i<26;i++){
//     buf2[i] = i+97;
// }
// console.log(buf2);
// buf2.copy(buf3,8,16,20);//拷贝buf2从第16到19字节偏移量的数据buf3第8字节偏移量
// console.log(buf3.toString('ascii',0,25));


const buf5 = Buffer.from("hello");
const buf6 = Buffer.from("world");

console.log(Buffer.compare(buf5,buf6));
console.log(buf5.equals(buf6));