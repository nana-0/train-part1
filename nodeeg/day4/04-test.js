//call  对象1中方法给对象2中用  
function Cat(){

}

/*
Cat.prototype.food="fish";
Cat.prototype.say=function(){};*/

Cat.prototype={
	food:'fish',
	say:function(){
		console.log("I love "+this.food);
	}
}

var blackcat=new Cat();
blackcat.say();

var whiteDog={
	food:'bone'
}

blackcat.say.call(whiteDog);  //say()  say的执行形式

whiteDog.say;