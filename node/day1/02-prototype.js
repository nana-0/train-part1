const { log } = require("console");

function Demo() {
    this.a=1;
    this.bb=function(){
        console.log(123);
    }
}
Demo.prototype.write=function () {
    console.log("I am writing");
}
function AA() {
    this.c=2;
    this.dd=function () {
        console.log("hello");
        
    }
    
}
AA.prototype = new Demo().__proto__;
var aa = new AA();
//aa.__proto__ = Demo.prototype;
aa.dd();
aa.write();
//证明Object和Function可以互为子集
