/*
 *方法形式读取写入
 */
var fs = require("fs");
var pathRead = "D:/AllDemo/node/io/aaaa.txt";
var pathWrite = "D:/AllDemo/node/io/bbbb.txt";
var readStream = fs.createReadStream(pathRead);
var writeStream = fs.createWriteStream(pathWrite);
readStream.on("data",function(str){
	//读取文件内容 然后写入另一个文件中去
	//如果说读的速度过快就需要读取暂停
	if(writeStream.write(str) === false){
		readStream.pause();
	}
});
writeStream.on("drain",function(){//写完读的之后
	readStream.resume();  //接着继续写
});
readStream.on("end",function(){
	writeStream.end();
	console.log("写入完毕！！！");
})
