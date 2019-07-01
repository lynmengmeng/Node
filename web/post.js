var http = require("http");
//主要用来解析post请求数据
var querystring = require("querystring");


http.createServer(function(req,res){
	//屏蔽默认情求
	if(req.url === '/favicon.ico'){
		res.writeHead(200,{'Content-Type':'image/x-icon'});
		res.end;
		return;
	}
	res.writeHead(200,{'Content-Type':'text/plain'});
	
	var post = "";
	req.on('data',function(str){
		post += str;
	});
	//真正获取post数据
	req.on('end',function(){
		post= querystring.parse(post);
		console.log(post.name + "  " + post.pwd);
		res.end(post.name + "  " + post.pwd);
	});
	
	
}).listen(8888);
console.log("服务器启动成功");

