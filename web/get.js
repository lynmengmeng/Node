/**
 * 页面上有删除指定目录1或者2 删除后 并且在word文件夹下创建 text 用来记录 哪个时间 删除的 目录1 还是 目录2
 */
var http = require("http");
var url = require("url");
var util = require("util");
var fs = require("fs");

var path1 = "C:/Users/Lee.Teacher/Documents/HBuilderProject/H1701node/node/test1";
var path2 = "C:/Users/Lee.Teacher/Documents/HBuilderProject/H1701node/node/test2";
var pathText = "C:/Users/Lee.Teacher/Documents/HBuilderProject/H1701node/node/word/text1.txt";

var fileText = "";

http.createServer(function(req,resp){
	//屏蔽默认请求
	if(req.url === "/favicon.ico"){
		resp.writeHead(200,{'Content-Type':'image/x-icon'});
		resp.end();
		return;
	}
	resp.writeHead(200,{"Content-Type":"text/plain"});
	//接收数据
	var params = url.parse(req.url,true).query;
	//获取删除哪个目录的文件
	if(params.dir!=null&&params.dir!=undefined){
		var dirNum = params.dir;
		console.log("获取的目录为:"+dirNum);
		//记录 删除 哪个文件
		writeFileFun(dirNum);
		//删除目录
		rmdirFun(dirNum);
		console.log(req.url);
		resp.end("恭喜你 删除" + dirNum + " 成功！");
	}else if(null!=params.)
	
	
	
	
}).listen(8888);

//删除目录
function rmdirFun(num){
	var pathls = path1;
	if(num!=1){
		pathls =path2;
	}
	fs.rmdir(pathls,function(err){
		if(err) console.log("删除"+num+"序号目录失败");
		console.log("删除"+num+"序号目录成功");
	})
}


//记录
function writeFileFun(nums){
	var options = {encoding:"utf8",flag:"w"};
	var content = "当前时间为 :" + (new Date()) + " 您删除的是第" + nums + "个文件夹!";
	fs.writeFile(pathText,content,options,function(err){
		if(err) console.log("记录失败！！");
		console.log("日志记录成功！");
	})
}

console.log("服务器 启动成功！");