var querystring =require("querystring");
var util=require("util");
var User_model=require("../models/user_model.js");

//new Promise().then  async/await
async function nn(){
	return "this is async data";  //return new Promise()
}

exports.mm=async function(req,res,next){
	//Promise().then
	/*
	var p=nn();
	p.then((data)=>{
		console.log(data);
	})*/

	var d=await nn();
	console.log(d);
}



exports.checkname=function(req,res,next){
	var name=req.body.uname;
	//把name发给数据库验证
	User_model.check_name(name,function(err,data){
		if(err){
			console.log(err);
		}else{
			if(data.length>0){
				res.json({
					'errno':101,
					'errmsg':'用户名重名'
				})
			}else{
				res.json({
					'errno':1,
					'errmsg':'用户名不重名å'
				})
			}
		}
	})
}

exports.reg=function(req,res,next){
	res.render("reg");
}

exports.do_reg=async function(req,res,next){
	var email=req.body.email;
	var name=req.body.name;
	var pass=req.body.pwd;

	//注册之前 验证email是不是重名 前端解决问题(ajax) 后端解决问题
	//1、验证用户名是不是重名  如果重名返回重名  如果不重名插入数据库返回注册成功
	/*
	User_model.check_name(email,function(err,data){
		if(err){
			console.log(err);
		}else{
			if(data.length>0){
				res.json({
					'errno':101,
					'errmsg':'用户名重名'
				})
			}else{
				
				res.json({
					'errno':1,
					'errmsg':'用户名不重名å'
				})

				//把数据插入数据库 返回注册成功
				User_model.insert_name_by_pass(email,name,pass,function(err,data){
					if(err){
						console.log(err);
						return;
					}else{
						console.log(data);
						if(data.affectedRows==1){
							//跳转登录页面
							//es.redirect("/login");
							
							res.json({
								'errno':1,
								'msg':'用户注册成功'
							})
						}
					}
				})
			}
		}
	})*/


	//验证reg异步的代码变成同步
	var ss=await new Promise((resolve,reject)=>{
		User_model.check_name(email,function(err,data){
			if(data.length>0){
				resolve(data);
			}else{
				resolve(data);
			}

			reject();
		})
	})

	if(ss.length>0){
		res.json({
			'errno':101,
			'errmsg':'用户名重名'
		})
	}else{
		var dd=await new Promise((resolve,reject)=>{
			User_model.insert_name_by_pass(email,name,pass,function(err,data){
				if(data.affectedRows==1){
					resolve(data);
				}

				reject();
			})
		})

		if(dd.affectedRows==1){
			res.redirect("/login");
			/*
			res.json({
				'errno':1,
				'errmsg':'用户注册成功'
			})*/
		}
	}


	


	//console.log(email+"||"+name+"||"+pass);
	/*
	User_model.get_all_users(name,function(err,data){
		if(err){
			console.log(err);
			return 
		}else{
			console.log(data);
		}
	})*/

}

exports.aa=function(req,res,next){
	var newid=req.query.id;
	var oldid="123";
	if(newid=="456"){
		var oldid=newid;
		next(oldid);
	}else{
		next(oldid);
	}
}

exports.bb=function(oldid,req,res,next){
	res.send(oldid);
}

exports.xx=function(req,res,next){
	var qname=req.query.q;
	var name=req.query.name;

	//console.log(qname);
	//console.log(name);
}

exports.yy=function(req,res,next){
	var yname=req.params.name;
	var yage=req.params.age;

	//console.log(yname);
	//console.log(yage);
	var str="登录用户名: "+yname+" 年龄: "+yage;
	res.send(str);
}

exports.unlogin=function(req,res,next){
	req.session=null;
	res.redirect("/index");
}


exports.login=function(req,res,next){
	res.render("login");
}

exports.do_login=function(req,res,next){

	var email=req.body.email;
	var pass=req.body.pwd;

	User_model.sel_name_by_pass(email,pass,function(err,data){
		if(err){
			console.log(err);
			return;
		}else{
			if(data.length>0){
				req.session.id=data[0].USER_ID;
				req.session.name=data[0].NAME;
				res.redirect("/index");
				//console.log(req.session);
				//req.session=data;
				//console.log(util.inspect(req.session));
				//console.log("登录成功");
				//cookie-session  express-session
				//res.redirect("/");
			}else{
				res.redirect("/login");
			}
		}
	})
	//用什么样的方式传 就用对应的方式接收
	/*
	var postData="";
	
	req.setEncoding('utf8');
	
	req.addListener("data",function(postDataChunk){
		console.log(12345);
		postData+=postDataChunk;
	});

	req.addListener("end",function(){
		//console.log(postData);
		console.log(postData);
		/*
		var ParamObj=querystring.parse(postData);
		var str="name="+ParamObj.username+" book="+ParamObj.pass;
		res.writeHead(200,{"Content-type":"text/plain"});
		res.end(str);
	});*/
}