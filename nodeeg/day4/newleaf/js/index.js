//使用require加载leaf.js用define定义出来的Leaf类
require(['./leaf'],function(Leaf){
	//创建容器
	var oContainer=document.getElementById('container');
	var winWidth=document.documentElement.clientWidth;

	for(var i=0;i<4;i++){
		var iWidth=parseInt(50+Math.random()*51);
		var leaf=new Leaf({
			width:iWidth,
			left:parseInt(Math.random()*(winWidth-iWidth)),
			container:oContainer
		})

		leaf.fall();
	}
	//left(叶子距离左侧的距离) Math.random()*(documentElement.clientWidth-iWidth)
	//width(叶子的宽度 var iWidth=parseInt(50+Math.random()*51)放在for循环中
})