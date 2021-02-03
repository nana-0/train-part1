/*
function Demo(){
    var b = 456;
    this.a = 123;
    this.bb = function () {
        console.log("hello");
    }
}
//CommenJS---requireJS---NodeJS
//module.exports exports
var demo = new Demo();
module.exports=demo;
//module.export  类、对象、数组、字符串
//export 对象 
*/
/*
exports.demo ={
    'a':456,
    'bb':function (params) {
        console.log("tired");
    }
} 
exports.c=789;
*/

exports = {
    'a':456,
    'bb':function (params) {
        console.log("tired");
    },
    'c':789
}//输出空对象 直接赋值 地址变了
//直接赋值 地址变    引用赋值 地址不变
//require加载模块的时候 加载的是module.exports的地址，
//exports是modules.exports地址的引用