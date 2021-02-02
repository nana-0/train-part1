const { exec } = require("child_process");

//异步转同步  原生方法
//方法一：
// for(var i = 0; i < 10; i++){
//     var m = i;
//     /*setTimeout(function(){
//         console.log(m);
//     },200);*/
//     execa(m);
// }
// function execa(m){
//     setTimeout(function(){
//         console.log(m);
//     },200);
// }

//方法二：回调
for(var i = 0; i < 10; i++){
    var m = i;
    execa(m,function(m){
        console.log(m);
    });
}
function execa(param,callback){
    setTimeout(function(){
        callback(param);
    },200);
}