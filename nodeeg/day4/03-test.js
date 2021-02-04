//callee caller  callee必须伴随arguments
function parent(param1,param2,param3){
	child(param1,param2,param3);
}

function child(){
	console.log(arguments);
	console.log(arguments.callee);
	console.log(child.caller);
}

parent(123,456,789);