// const buf = Buffer.from("nana");
// //console.log(buf);

// //values()  keys()  entries()

// for(const value of buf.values()){  //值
//     console.log(value);
// }

// for(const key of buf.keys()){      //索引
//     console.log(key);
// }

// for(const entry of buf.entries()){ //[索引，值]
//     console.log(entry);
// }

// const str = "http://nodejs.cn";

// const buf1 = Buffer.allocUnsafe(str.length);

// for(let i = 0; i < str.length; i++){
//     buf1[i] = str.charCodeAt(i);
// }
// console.log(buf1.toString('ascii'));

// const buf = Buffer.allocUnsafe(26).fill("@");
// console.log(buf.toString("ascii"));

// const buf = Buffer.allocUnsafe(26);
// for(let i = 0; i < 26; i++){
//     buf[i] =i + 97; 
// }
// console.log(buf.toString("ascii"));

// const buf1 = Buffer.allocUnsafe(26).fill('!');
// console.log(buf1.toString("ascii"));
// buf.copy(buf1,1,5,10);
// console.log(buf1.toString("ascii"));

const buf = Buffer.from("hello");
const buf1 = Buffer.from("world");

//console.log(Buffer.compare(buf,buf1));
console.log(buf.equals(buf1));