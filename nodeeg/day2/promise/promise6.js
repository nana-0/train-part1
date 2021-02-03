async function getData(){
	console.log(2);
	return "这是一个数据";
}

async function test(){
	console.log(1);
	var d=await getData();
	console.log(d);
	console.log(3);
}

test();