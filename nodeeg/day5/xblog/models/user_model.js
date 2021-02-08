var db=require("./db.js");

/*
exports.get_all_users=function(name,callback){
	var sql="select * from t_users where NAME=?";
	db.query(sql,[name],callback);	
}*/

exports.insert_name_by_pass=function(email,name,pass,callback){
	var sql="insert into t_users(ACCOUNT,NAME,PASSWORD) values(?,?,?)";
	db.query(sql,[email,name,pass],callback);
}

exports.check_name=function(name,callback){
	var sql="select * from t_users where ACCOUNT=?";
	db.query(sql,[name],callback);
}

exports.sel_name_by_pass=function(email,pass,callback){
	var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
	db.query(sql,[email,pass],callback);
}



/*
表约束  not null,default,主键约束,外键约束
增删改---都是对当前的结果集有影响   
查---没查出来 返回一个空结果集  查出来 返回是个结果集

//mysql增删改查  mysql关系型数据库  mongodb--redis  KV数据库
增
insert into 表名(列名,列名,...) values(值,值,...)

删
delete from 表名 where id=1
drop 表名

改
update 表名 set 列名=值,列名=值 where id=1

查
select * from 表名
select * from 表名 where id=1*/

