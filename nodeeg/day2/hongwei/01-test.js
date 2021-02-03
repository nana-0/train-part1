//讲解宏任务微任务

process.nextTick(()=>console.log(1));
Promise.resolve().then(()=>console.log(2));
process.nextTick(()=>console.log(3));
Promise.resolve().then(()=>console.log(4));


//同步最快-->Promise同步跟随代码--->(同步--异步切换)--->process.nextTick-->Promise异步代码
//-->setTimeout setInterval -->setImmdiate