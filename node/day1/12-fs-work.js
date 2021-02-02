var fs = require('fs');
var findFs = function (pathname,callback) {
    fs.stat("day1",function (err,data) {//fs.stat返回文件属性
        if(err) {
            console.log(err);
            return false;
        } else{
            if(data.isDirectory())
            {
                var wenheichouwa = function (callback){
                        fs.readdir("day1",function (err,fileordir) {
                            //console.log(fileordir);
                            callback(fileordir)
                        });
                };
                wenheichouwa(function (data) {
                    for (var i=0;i<data.length;i++)
                    {
                        findFs(pathname+"/"+data[i])
                    }
                })
            }
            else
            {
                console.log(pathname);
            }
        }
    });
};
findFs();