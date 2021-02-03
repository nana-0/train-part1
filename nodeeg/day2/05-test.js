var firecount=0;

var start=new Date();
var timer=setInterval(function(){
	if(new Date()-start>1000){
		clearInterval(timer);
		console.log(firecount);
		return;
	}

	firecount++;
},0);

//setInterval setTimeout
//定时不是真正定时 node定时来自于process.nextTick允许将事件调度尽可能快的触发
//setInterval setTimeout process.nextTick requestAnimationFrame
//有些异步函数可以间接取回来(不是通过事件队列处理回调)---Promise对象或Pubsub模式