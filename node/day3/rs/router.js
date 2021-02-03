//router---控制器下的方法Coon.goIndex
var Coon = require("./coon.js")

exports.router = function (req,res,pathname){
    switch(pathname){
        case "/":
            Coon.goIndex(res);//打开主页
            break;
        case "/upload":
            Coon.upload(res);//加载上传的文件
            break;
        case "/do_upload":
            Coon.do_upload(req,res);//处理上传文件数据的路由
        default:
            Coon.goFault(res);

    }

}