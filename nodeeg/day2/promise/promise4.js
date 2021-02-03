//node 处理回调深渊bluebird async(waterfall) 异步变同步
//new Promise---async return new Promise.then()----async/await

async function getData(){  //---返回的是一个Promise对象 里面包含"这是一个数据"这个字符串
	return "这是一个数据";
}

var p=getData();
p.then(function(data){
	console.log(data);
})

//console.log(p[0]);