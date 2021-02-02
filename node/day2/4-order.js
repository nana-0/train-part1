const { setImmediate } = require("timers");

//执行顺序：同步向异步切换时间片(process.nextTick)-->setTimeout-->setImmediate
console.log("start");

setTimeout(() => {
    console.log(123);    
});

process.nextTick(function(){
    console.log(456);
})

setImmediate(function(){
    console.log("789");
})

console.log("end");

// start
// end
// 456
// 123
// 789