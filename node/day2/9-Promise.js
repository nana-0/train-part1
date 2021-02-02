//Promise同步不会因为resolve和reject阻塞  async/await会阻塞
//1.创建Promise

/*
var p = new Promise(function(resolve,reject){
    var name = "lisi";
    if(Math.random()<0.7){
        console.log(123);
        resolve(name);
        console.log(456);
    }else{
        reject("失败");
    }
})
p.then(function (name) {
    console.log(name);
})
*/

//2.外部定义Promise


function getData(resolve,reject) {
    console.log(123);
    setTimeout(function () {
        var name = "zhangsan";
        resolve(name);
    },1000);
    
}

var p = new Promise (getData);
p.then(function (name) {
    console.log(name);
})