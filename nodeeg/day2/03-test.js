//setTImeout setInterval不是真正定时(chrome node process.nextTick)

var start=new Date();
setTimeout(function(){
	var end=new Date();
	console.log('Time elapsed:',end-start,'ms');
},500);

while(new Date()-start<1000){}