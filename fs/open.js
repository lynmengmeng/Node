/*fs.open()
 */
var fs = require("fs");//Node 导入文件系统模块(fs)
var path = "C:/Users/Administrator/Documents/HBuilderProjects/node/fs/myfile.txt";
var path2 = "C:/Users/Administrator/Documents/HBuilderProjects/node/fs/myfilecopy.txt";
var str = "今天天气还行！";
//打开文件
fs.open(path,"r+",function(err,fd){
	if(err){console.log(err.toString())};
	console.log("读写完成！");
	console.log(fd);
});
//获取文件信息
fs.stat(path,function(err,stat){
	console.log(stat.isFile()?"这是一个文件":"这不是一个文件");
});
//第三个参数{options}
var options = {encoding:"utf-8",flag:"w"}
fs.writeFile(path2,str,options,function(err){
	if(err) return console.log("写入失败，失败原因为："+err.toString());
	
	console.log('写入文件成功，等待读取文件');
	console.log('------------分隔----------------');
	console.log('读取文件：');
	
	fs.readFile(path2,'utf-8',function(err,data){
		if(err)  console.log("读取失败 失败原因为："+err.toString());
		console.log(data.toString());
	});
});

