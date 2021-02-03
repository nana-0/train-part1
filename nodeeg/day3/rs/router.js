//router---控制器下的方法Coon.goIndex

// /---goIndex 加载主页  /add---处理get  /post处理post操作 /img 处理图片
// /json--解析json JOSN.parse jsonfile

var Coon=require("./coon.js");

exports.router=function(req,res,pathname){
	switch(pathname){
		case "/":
			Coon.goIndex(res);  //打开主页
			break;
		case "/upload" :    //加载上传的静态文件
			Coon.upload(res);
			break;
		case "/do_upload":   //处理上传文件数据的路由
			Coon.do_upload(req,res);
			break;
		default:
			Coon.goFault(res);
			break;

	}

}