//node处理递归查找文件和文件夹
var fs = require("fs");
var path = require("path");

var filePath = path.resolve("./js");

//调用文件遍历方法
fileDisplay(filePath);

function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function (err,files) {
        if(err){
            console.warn(err);
        }else{
            //遍历读取文件列表
            files.forEach(function (filename) {
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.stat的对象
                fs.stat(filedir,function (err,stats) {
                    if(err){
                        console.warn("获取文件stat状态失败");
                    }else{
                        var isFile = stats.isFile();
                        var isDir = stats.isDirectory();
                        if(isFile){
                            console.log(filedir);
                            //读取文件内容
                            var content = fs.readFileSync(filedir,"utf-8");
                            console.log(content);
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历文件夹下的文件
                        }
                    }
                    
                })
            })
        }
        
    })
    
}