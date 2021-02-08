const { rejects } = require("assert");
const { resolve } = require("path");
var querystring = require("querystring");
var User_model = require("../models/user_model.js");

//new Promise().then  async/await
async function nn() {
    return "this is async data";//return new Promise()
}
exports.mm = async function (req, res, next) {
    //Promise().then

    // var p = nn();
    // p.then((data)=>{
    //     console.log(data);
    // })

    var d = await nn();
    console.log(d);
}

exports.checkname = function (req, res, next) {
    var name = req.body.uname;
    //把name发给数据库
    User_module.check_name(name, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            if (data.length > 0) {
                res.json({
                    'errno': 101,
                    'errmsg': "用户名重名"
                })
            } else {
                res.json({
                    'errno': 1,
                    'errmsg': "用户名不重名"

                })
            }

        }
    })
}

exports.reg = function (req, res, next) {
    res.render("reg");
}

exports.do_reg = async function (req, res, next) {
    var email = req.body.email;
    var name = req.body.name;
    var pass = req.body.pwd;
    //注册之前  验证email是不是重名  前端解决问题（ajax）后端解决问题
    //1.验证用户是不是重名  如果重名返回重名  如果不重名插入数据库返回注册成功
    /*
        User_module.check_name(email, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                if (data.length > 0) {
                    res.json({
                        'errno': 101,
                        'errmsg': "用户名重名"
                    })
                } else {
                    //把数据插入数据库 返回数据成功
                    User_module.insert_name_by_pass(email, name, pass, function (err, data) {
                        if (err) {
                            console.log(err);
                            return;
                        } else {
                            //console.log(data);
                            if (data.affectedRows == 1) {
                                //跳转登录页面
                                //res.redirect("/login");
                                res.json({
                                    'errno': 1,
                                    'msg': '用户注册成功'
                                })
    
                            }
                        }
                    })
    
                }
    
            }
    
        })
    */

    //验证reg异步的代码变成同步
    var ss = await new Promise((resolve, rejects) => {
        User_model.check_name(email, function (err, data) {
            if (data.length > 0) {
                resolve(data);
            } else {
                resolve(data);
            }
            rejects();
        })
    })
        if (ss.length > 0) {
            res.json({
                'errno': 101,
                'errmsg': '用户名重名'
            })
        } else {
            var dd = await new Promise((resolve, rejects) => {
                User_model.insert_name_by_pass(email, name, pass, function (err, data) {
                    if (data.affectedRows == 1) {
                        resolve(data);
                    }
                    rejects();
                })
            })
            if (dd.affectedRows == 1) {
                //跳转登录页面
                res.redirect("/login");
            //     res.json({
            //         'errno': 1,
            //         'errmsg': '用户注册成功'
            //     })
             }
        }

    




    // User_model.insert_name_by_pass(email,name,pass,function(err,data){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }else{
    //         //console.log(data);
    //         if(data.affectedRows == 1){
    //             //跳转登录页面
    //             res.redirect("/login");
    //             // res.json({
    //             //     'errno':1,
    //             //     'msg':'用户注册成功'
    //             // })

    //         }
    //     }
    // });

    // console.log(email+"||"+name+"||"+pass);
    // User_model.get_all_users(function(err,data){
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