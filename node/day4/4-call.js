//callee  caller callee必须伴随argumentS
function parent(param1,param2,param3){
    child(param1,param2,param3);
}
function child(){
    console.log(arguments);
    console.log(arguments.callee);
    console.log(child.caller);
}
parent(123,456,789);
// [Arguments] { '0': 123, '1': 456, '2': 789 }
// [Function: child] 
// [Function: parent]