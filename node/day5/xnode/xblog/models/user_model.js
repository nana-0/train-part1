var db = require("./db.js");
/*
exports.get_all_users = function(name,callback){
    var sql = "select * from t_users where NAME=?";
    db.query(sql,[name],callback);
}*/

exports.insert_name_bypass = function(email,name,pass,callback){
    var sql = "insert into t_users(ACCOUNT,NAME,PASSWORD) values(?,?,?)";
    db.query(sql,[email,name,pass],callback);

}