var fs = require("fs");
var url = require("url");
var formidable = require("formidable");

exports.goIndex=function (res) {
    
}

exports.goFault=function (res) {
    
}

exports.upload=function (res) {
    var uploadPath = __dirname+"/static/"+url.parse("upload.html").pathname;
    var uploaddata = fs.readFileSync(uploadPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(uploaddata);
}

exports.do_upload=function (req,res) {
    //console.log("aaa");
    //使用第三方模块上传 node_modules
    const form = formidable({multiples:true});
    form.parse(req, (err, fields, files) => {
    	//console.log(files);
      //res.writeHead(200, { 'content-type': 'application/json' });
      //res.end(JSON.stringify({ fields, files }, null, 2));
      if(files.sfile.name){
        var oldpath=files.sfile.path;
      	var newpath=__dirname+'/upload/月光.jpg';
      	var readStream=fs.createReadStream(oldpath);
      	var writeStream=fs.createWriteStream("./upload/test.jpg");
      	readStream.pipe(writeStream);

      	readStream.on("end",function(){
      		fs.unlinkSync(oldpath);
      		console.log("success");
      		res.writeHead(200,{"Content-type":"text/plain"});
      		res.end("upload success");
      	})

      	/*
      	fs.rename(oldpath,newpath,function(err,data){
      		if(err){
      			console.log(err)
      		}else{
      			console.log('success');
      		}
      	})*///跨分区问题
      }
    });

    
}