exports.index=function(req,res,next){
	//console.log(req.session);
	var arr=['laofeng','laoxie','xiaowu'];
	res.render("index",{
		'title':'Express',
		'names':arr,
		'sess':req.session,
	})
}