var fs = require("fs");

//var path = require("path");
//var newdirpath = path.normalize("C:/Users/Administrator/Documents/HBuilderProjects/node/fs/dir/test/");
var path = "C:/Users/Administrator/Documents/HBuilderProjects/node/fs/dir/test/";
var readpath = "C:/Users/Administrator/Documents/HBuilderProjects/node/fs/dir/";
//新建目录
fs.mkdir(path,function(err){
	if(err) console.log("创建失败失败原因为："+err.toString());
	console.log("创建成功！");
});
//读取目录
fs.readdir(readpath,function(err,files){
	if(err) console.log("读取目录失败"+ err.toString());
	//循环
	files.forEach(function(fil){
		console.log(fil);
	});
});

fs.rmdir(path,function(err){
	if(err) console.log("移除目录失败："+ err.toString());
	console.log("移除成功！");
});

