var db = require("./db.js");

exports.get_all_users = function(name,callback){
    var sql = "select * from t_users where NAME=?";
    db.query(sql,[name],callback);
}