async function getData(){
	return "这是一个数据";
}

async function test(){
	//console.log(123);
	var d=await getData();
	console.log(d);
	//console.log(456);
}

test();