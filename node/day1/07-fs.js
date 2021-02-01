var fs = require("fs");
//同步  同步会产生阻塞
var data = fs.readFileSync("./07-text.txt","utf-8");
console.log(data);
console.log("end");
//异步
fs.readFile("./07-text.txt","utf-8",function (err,data) {//当前进程空闲，达到触发条件
    if(err){  //磁盘io 时间io 自定义事件
        console.log(err);
        return err;
    }else{
        console.log(data);
    }
})
console.log("end");