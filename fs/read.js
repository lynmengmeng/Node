var fs = require("fs");
var buf = new Buffer(1024*5);
var pathto = require("path");
/*路径的标准化
在存储或使用路径之前将它们标准化通常是个好主意。
比如，由用户输入或者配置文件获得的文件路径，
或者由两个或多个路径连接起来的路径，一般都应该被标准化。
可以用path模块的normalize函数来标准化一个路径，而且它还能处理“..”，“.”“//”。比如：*/
var path =pathto.normalize("C:/Users/Administrator/Documents/HBuilderProjects/node/fs/myfile.txt");
//r+读写文件        w写 w+读写，先写后读，如果没有写入内容就读取那么文件为置空
fs.open(path,"r+",function(err,fd){
	if(err) console.log("打开文件失败！："+err.toString());
	//效率更高的读取方式，通过字节流buf来进行读取
	//第一个参数 
	//第二个参数 写入哪个字节流
	//第三个参数 从这个字节流哪个位置开始写
	//第四个参数 读取 文件中的长度
	//第五个参数  从文件中哪个位置 开始读取
	
	//读取文件
	fs.read(fd,buf,0,buf.length,12,function(err,bytes){		//一个汉字三个byte
		if(err) console.log("读取字节流失败！"+err.toString());
		console.log(bytes + "字节被读取！");
		if(bytes>0){
			console.log("读取到的文件为：" + buf.slice(0,bytes).toString());
		}
	});
	//关闭文件
	fs.close(fd,function(err){
		if(err) console.log("关闭失败"+err.toString());
		console.log("关闭成功");
	})
	
});

var pathun = "C:/Users/Administrator/Documents/HBuilderProjects/node/fs/新建视频.mp4";
fs.unlink(pathun,function(err){
	if(err) console.log('删除失败');
	console.log('删除成功！');
});
