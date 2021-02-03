console.log("start");

for(var i=0;i<5;i++){  //for循环是同步的
	setTimeout(function(){   //异步的  -->eventloop 1、2、3、4、5
		//var i=0;
		console.log(i);
	},0);
}


console.log("end");

//输出次序是什么 start end 55555  同步程序作用域空闲(当前进程空闲) 
//触发异步函数方法执行需要满足两个条件
//(1)当前进程空闲 (2)触发条件--时间IO、磁盘IO(本地、网络)、
//事件(自定义事件,原生-第三方模块自带事件(data、end、connnection、drain)) on、once、addListener监听、emit发射




