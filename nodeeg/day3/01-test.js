exports={
	'a':456,
	'bb':function(){
		console.log("so sad");
	},
	'c':789
}



//require加载模块的时候 加载的是module.exports的地址,
//exports是module.exports地址的引用

//直接赋值 引用赋值
/*
var d=567; //JS弱类型 d 0x1a2b3c  0x3d4a5c
var d=789;

var obj={
	'd':567,
}
obj.d=789;*/

/*
exports.demo={
	'a':456,
	'bb':function(){
		console.log("so sad");
	}
}
exports.c=789;*/

/*
function Demo(){
	var b=456;
	this.a=123;
	this.bb=function(){
		console.log("hello");
	}
}

var demo=new Demo();*/
//module.exports  类、对象、数组
//exports 只能把对象公布给外部


//CommonJS---requireJS---NodeJS
//module.exports exports
//module.exports=Demo;
//module.exports=demo;
//module.exports=['laofeng','xiaowu','xiaodong'];
/*
module.exports={
	'a':123,
	'bb':function(){
		console.log("world");
	}
}*/

/*
var demo=new Demo();
demo.bb();
console.log(demo.a);
console.log(demo.b);*/