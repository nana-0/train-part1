//setTimeout setInterval不是真正的定时

// var start = new Date();
// //console.log(start);

// setTimeout(function(){
//     var end = new Date();
//     console.log(end-start,"ms");
// },500)//500ms已触发 在事件队列中

// /*
// setTimeout(function(){
//     var end = new Date();
//     console.log(end-start,"ms");
// },3000)//3000ms未触发 
// */

// while(new Date()-start<1000){}//1000ms后


//setTimeout 中0ms和1ms都视为0ms，先进入队列先输出  打印1 0
/*
setTimeout(function(){
    console.log(1);
},1)
setTimeout(function(){
    console.log(0);
},0)
*/

//小于1000也会输出
//定时不是真正定时 node定时来自于process.nextTick 允许将事件调度尽可能快的触发
var firecount = 0;

var start = new Date();
var timer = setInterval(() => {
    if(new Date()-start>1000){
        clearInterval(timer);
        console.log(firecount);
        //return;
    }
    firecount++;
    
}, 0);