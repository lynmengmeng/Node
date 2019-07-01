//Stream 数据流 文件读取
var fs = require("fs");
var path = "D:/AllDemo/node/io/aaaa.txt"
var data = "";
//创建读取文件的流
var readStream = fs.createReadStream(path);
//设置编码集
readStream.setEncoding("utf8");
//data绑定为读取到数据后触发
readStream.on("data",function(str){
	//console.log("每次输出的为："+str);
	data+=str;
});
//end读取结束后触发
readStream.on("end",function(){
	console.log(data);
});
//error如果出错
readStream.on("error",function(err){
	console.log(err.toString());
});

console.log("读取完毕");
