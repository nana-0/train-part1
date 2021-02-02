//js回调 同步回调 异步回调
//1.异步回调
/*
function Person(){
    this.think = function(callback){
        console.log("thinking ~~~~~~~");
        setTimeout(function(){
            callback();
        },5000)
    }
    this.answer = function(){
        console.log("I am answering other question");
    }
}

var person = new Person();
person.think(function(){
    console.log("thinking 5 seconds get the right answer");
});
person.answer();
*/

//2.同步回调
//等待5s 然后说出人名
/*
function waitFive(name,function_name) {
    var pus = 0;
    var currentDate = new Date();
    while(pus<5000){
        var now = new Date();
        pus = now-currentDate;
    }
    function_name(name);
}
function echo(name) {
    console.log(name);
}
waitFive("nana",echo);
console.log("end");
*/

//3.异步回调 
//吃午餐
function haveLunch(food,drink,callback){
    console.log("Having lunch of "+food+' '+drink);
    if(callback && typeof(callback) === 'function'){
        setTimeout(function () {
            callback();
        },5000);
    }
}
haveLunch('Toast','coffee',function () {
    console.log("finished lunch");
})