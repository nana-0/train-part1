//域名解析 
var dns = require("dns");

dns.resolve4('www.qq.com','A',function(err,addresses){
    if(err){
        console.log(err);
    }else{
        console.log(addresses);
    }
});