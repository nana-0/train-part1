var querystring =require("querystring");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'blog'
});


exports.reg=function(req,res,next){
	res.render("reg");
}

exports.do_reg=function(req,res,next){
	var email=req.body.email;
	var name=req.body.name;
	var pass=req.body.pwd;

	//console.log(email+"||"+name+"||"+pass);
	 
	connection.connect();
	 
	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results[0].solution);
	});
	 
	connection.end();
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


exports.login=function(req,res,next){
	res.render("login");
}

exports.do_login=function(req,res,next){

	var name=req.body.username;
	var pass=req.body.pass;
	console.log(name);
	console.log(pass);
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