//数据流 写入
var fs = require("fs");
var data = "你爱";
var path = "D:/AllDemo/node/io/aaaa.txt";
var writeStream = fs.createWriteStream(path);
writeStream.write(data,"utf-8");//写入的内容会覆盖原来的文本内容
writeStream.end();
writeStream.on("finish",function(){
	console.log("写入完成");
});
