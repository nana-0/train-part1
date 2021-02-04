// 继承：
// 核心关键点：
// 1.父类拥有一种方法把父类的成员属性 成员方法拷贝给子类
// Java、PHP、ES6---extends  Child extends Parent
// ES5&Node   call方法   Parent.call(this);
// 2.子类要具备一种方法可以调用到父类的构造函数
// PHP---construct()---parent::__constructor()
// Java、ES6---super（）
// ES5---Child.prototype = Parent.prototype  Child.prototype.constructor = Child
// Node---util.inherits  constructor.super_
var util = require("util");
var events = require("events");

//events.EventEmitter

//创建子类
function MyStream(){
    //父类把成员属性成员方法拷贝给子类
    events.EventEmitter.call(this);
}
//子类的构造函数和父类的构造函数有关联 能访问
util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write = function(message){
    this.emit("data",message);
}

var stream = new MyStream();

console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_===events.EventEmitter);


stream.on("data",function(message){
    console.log("Receive Message : "+message);
});

stream.write("It works");