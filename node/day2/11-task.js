//宏任务 微任务 

/*
setTimeout(function(){
	console.log(123);
},0);

process.nextTick(()=>console.log(1));

new Promise(function(resolve){//Promise不产生阻塞
	console.log(456);
	resolve();
}).then(()=>console.log(2));

process.nextTick(()=>console.log(3));
Promise.resolve().then(()=>console.log(4));
console.log("end");
*/

//456 end  1 3 2 4 123

/*
async function async1(){
	console.log('async1 start');
	await async2();//跳出后先看主作用域是否有需要执行的，然后再跳回去
	console.log('async1 end');
}

async function async2(){
	console.log('async2');
}

console.log('script start');
async1();
console.log('script end');
*/
// script start
// async1 start
// async2    
// script end
// async1 end

setTimeout(function C(){
	console.log(3);
},0);

/*
process.nextTick(function A(){
	console.log(1);
	process.nextTick(function B(){
		console.log(2);
	})
	console.log(4);
})*/

/*
setTimeout(function C(){
	console.log(3);
},0);

process.nextTick(function A(){
	console.log(1);
	setTimeout(function(){
		process.nextTick(function B(){
			console.log(2);
		})
	})
	
	console.log(4);
})
*/

//14332

setTimeout(function C(){
	console.log(3);
},0);


process.nextTick(function A(){
	console.log(1);
	process.nextTick(function B(){
		console.log(2);
	})
	console.log(4);
})
//14233  