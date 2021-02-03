function haveLunch(food,drink,callback){
	console.log("Having lunch of "+food+' '+drink);
	if(callback && typeof(callback)==='function'){
		setTimeout(function(){
			callback();
		},5000);
	}
}


haveLunch('Toast','coffee',function(){
	//停个5S显示finished lunch
	console.log("Finished Lunch");
})
