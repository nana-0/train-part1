const buf = Buffer.from("nana");
for(const b of buf){
    console.log(buf);
}
//buf.values() buf.keys() buf.entries()
for(const value of buf.entries()){
    console.log(value);
}