//call apply bind
var obj={
	name:"laofeng",
	age:18,
	myFun:function(fm,t){
		console.log(this.name+" 年龄 "+this.age+" 来自 "+fm+" 去哪 "+t);
	}
}

//console.log(obj);
obj.myFun('成都','上海');

var db={
	name:"xiaowu",
	age:20
}

//obj.myFun.call(db,'成都','上海');
//obj.myFun.apply(db,['成都','上海']);
obj.myFun.bind(db,'成都','上海')();