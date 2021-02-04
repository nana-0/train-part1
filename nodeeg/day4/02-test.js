var util=require("util");
var events=require("events");

//events.EventEmitter

//创建子类
function MyStream(){
	//父类把成员属性成员方法拷贝子类
	events.EventEmitter.call(this);
}

//子类的构造函数和父类的构造函数有关联 能访问
util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write=function(message){
	this.emit("data",message);
}

var stream=new MyStream();

console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_===events.EventEmitter);

stream.on("data",function(message){
	console.log("Receive Message : "+ message);
});

stream.write("It works");

