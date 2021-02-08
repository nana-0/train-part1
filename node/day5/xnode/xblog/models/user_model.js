var db = require("./db.js");
/*
exports.get_all_users = function(name,callback){
    var sql = "select * from t_users where NAME=?";
    db.query(sql,[name],callback);
}*/

exports.insert_name_by_pass = function(email,name,pass,callback){
    var sql = "insert into t_users(ACCOUNT,NAME,PASSWORD) values(?,?,?)";
    db.query(sql,[email,name,pass],callback);

}

exports.check_name = function(name,callback){
    var sql = "select *from t_users where ACCOUNT=?";
    db.query(sql,[name],callback);

}

exports.sel_name_by_pass = function(email,pass,callback){
    var sql = "select * from t_users where ACCOUNT=? and PASSWORD=?";
    db.query(sql,[email,pass],callback);
}