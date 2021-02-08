var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'blog'
});

exports.query=function(sql,params,callback){
	pool.getConnection(function(err, connection) {
	  if (err) throw err; // not connected!
	 
	  // Use the connection
	  connection.query(sql,params,function (error, results, fields) {
	    // When done with the connection, release it.
	    connection.release();
	 
	    // Handle error after the release.
	    if (error) throw error;
	 	callback(error,results);
	    // Don't use the connection here, it has been returned to the pool.
	  });
	});

	/*
	"select * from t_users where NAME="+name
	"select * from t_users where ACCOUNT like '%"uname+"%'"
	insert into t_users(ACCOUNT,PASSWORD,NAME) values(name)*/

	/*
	connection.connect();
	 
	connection.query('select * from t_users', function (error, results, fields) {
	  if (error) throw error;
	  //console.log('The solution is: ', results[0].solution);
	  //console.log(results);

	  //results值传递给控制器
	  callback(error,results);
	});
	 
	connection.end();*/
}