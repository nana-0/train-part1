var querystring = require("querystring");
var User_module = require("../models/user_model.js");

exports.reg = function (req, res, next) {
    res.render("reg");
}

exports.do_reg = function (req, res, next) {
    var email = req.body.email;
    var name = req.body.name;
    var pass = req.body.pwd;

    User_module.insert_name_bypass(email,name,pass,function(err,data){
        if(err){
            console.log(err);
            return;
        }else{
            //console.log(data);
            if(data.affectedRows == 1){
                //跳转登录页面
                //res.redirect("/login");
                res.json({
                    'errno':1,
                    'msg':'用户注册成功'
                })

            }
        }
    });

   // console.log(email+"||"+name+"||"+pass);
    // User_module.get_all_users(function(err,data){
    //     if(err){
    //         console.log(err);
    //         return
    //     }else{
    //         console.log(data);
    //     }
    // }
    // })
    // var mysql = require('mysql');
    // var connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'mysql'
    // });

    // connection.connect();

    // connection.query('select * from t_users', function (error, results, fields) {
    //     if (error) throw error;
    //     //console.log('The solution is: ', results[0].solution);
    //     console.log(results);
    // });

    // connection.end();
}

exports.aa = function (req, res, next) {
    var newid = req.query.id;
    var oldid = "123";
    if (newid == "456") {
        var oldid = newid;
        next(oldid);
    } else {
        next(oldid);
    }
}

exports.bb = function (oldid, req, res, next) {
    res.send(oldid);

}

exports.xx = function (req, res, next) {
    var qname = req.query.q;
    var name = req.query.name;
    console.log(qname);
    console.log(name);
}

exports.yy = function (req, res, next) {
    var yname = req.params.name;
    var yage = req.params.age;

    // console.log(yname);
    // console.log(yage);
    var str = "登录用户名： " + yname + " 年龄" + yage;
    res.send(str);
}

exports.login = function (req, res, next) {
    res.render("login");
}

exports.do_login = function (req, res) {
    //用什么样的方式传  就用对应的方式接受
    var name = req.body.username;
    var pass = req.body.pass;
    console.log(name);
    console.log(pass);
}