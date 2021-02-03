//域名解析 DNS www.163.com ---> IP  IPV4  IPV6
var dns=require("dns");
dns.resolve4('www.qq.com','A',function(err,addresses){
	if(err){
		console.log(err);
	}else{
		console.log(addresses);
	}
})