//async 返回一个promise对象

// async function getData(){
//     return "这是一个数据"
// }

// var p = getData();
// console.log(p);

//解决方法：

// async function getData(){
//     return "这是一个数据"
// }

// var p = getData();
// p.then(function (data) {
//     console.log(data);    
// })

async function getData() {
    console.log(1);
    return "这是一个数据";
}

async function test() {
    console.log(123);
    var d = await getData();
    console.log(d);   
    console.log(456);
}
test();