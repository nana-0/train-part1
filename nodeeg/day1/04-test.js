const buf=Buffer.from("laofeng");
for(const b of buf){
	console.log(b);
}

//buf.values() buf.keys() buf.entries()
for(const value of buf.entries()){
	console.log(value);
}

//把字符串copy给buffer
const str="http://nodejs.cn";  //str.length
const buf1=Buffer.allocUnsafe(str.length);

for(let i=0;i<str.length;i++){
	buf1[i]=str.charCodeAt(i);
}

console.log(buf1.toString('ascii'));

//fill()  在buffer添加入字符 copy
const buf2=Buffer.allocUnsafe(26);
const buf3=Buffer.allocUnsafe(26).fill("!");

console.log(buf2);
console.log(buf3.toString("ascii"));

//buf2内容换成26字幕的ascii  for循环替换方式
for(let i=0;i<26;i++){
	buf2[i]=i+97;
}

console.log(buf2);
//拷贝buf2种第16到19字节偏移量的数据到buf3第8字节偏移量 copy方式
buf2.copy(buf3,8,16,20);
console.log(buf3.toString('ascii',0,25));


const buf5=Buffer.from("hello");
const buf6=Buffer.from("world");

console.log(Buffer.compare(buf5,buf6));
console.log(buf5.equals(buf6));





















