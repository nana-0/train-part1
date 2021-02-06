var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");

/* GET home page. */
router.get('/', function(req, res, next) {
	var arr=['laofeng','xiaowu','xiaodong'];
  res.render('index', { 
  	title: 'Express',
  	'names': arr

  });
});


router.get("/xx",User.xx);
router.get("/yy/:name/:age",User.yy);

function checkLogin(req, res, next){
	var sid=req.query.sid;
	if(sid=="789"){
		next();
	}else{
		res.send("no login");
	}
}

//next应用 /sindex 如果login 如果没登录不能访问
router.get("/sindex",checkLogin);
router.get("/sindex",function(req, res, next){
	res.send("login success");
})

function a(req, res, next){
	var str="hello world";
	next(str);
}

router.get("/b",a,function(str,req, res, next){
	res.send(str);
})

//通过路由来响应两个控制器下面的方法 User.aa  User.bb
router.get("/c",User.aa,User.bb);


router.get("/reg",User.reg);
router.post("/reg",User.do_reg);

router.get("/login",User.login);
router.post("/login",User.do_login);

module.exports = router;

















