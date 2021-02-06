const { send } = require("process");
var querystring = require("querystring");

exports.aa = function(req,res,next){
    var newid = req.query.id;
    var oldid = "123";
    if(newid=="456"){
        var oldid = newid;
        next(oldid);
    }else{
        next(oldid);
    }
}

exports.bb = function(oldid,req,res,next){
    res.send(oldid);
    
}

exports.xx = function(req,res,next){
    var qname = req.query.q;
    var name = req.query.name;
    console.log(qname);
    console.log(name);
}

exports.yy = function(req,res,next){
    var yname = req.params.name;
    var yage = req.params.age;

    // console.log(yname);
    // console.log(yage);
    var str = "登录用户名： "+yname+" 年龄"+yage;
    res.send(str);
}

exports.login = function(req,res,next){
    res.render("login");
}

exports.do_login = function(req,res){
    //用什么样的方式传  就用对应的方式接受
    var name = req.body.username;
    var pass = req.body.pass;
    console.log(name);
    console.log(pass);
}