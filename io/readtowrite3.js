var fs = require("fs");
var out = process.stdout;
//文件路径
var readpath = "D:/AllDemo/node/io/mov_bbb.mp4";
var writepath = "D:/AllDemo/node/io/新建视频.mp4";
var readStream = fs.createReadStream(readpath);
var writeStream = fs.createWriteStream(writepath);

var stat = fs.statSync(readpath);//读取文件信息
var passlength = 0;	//记录当前读取的值
var totalSize = stat.size;	//获取文件的总大小
console.log("原文件大小"+Math.ceil(totalSize/1024)+"KB");//原来获取的是字节，1KB=1024B字节
var startTime = new Date();		//当前时间
var lastSize = 0;		//最后读取的大小

//读取文件
readStream.on("data",function(str){
	//记录每次读取的长度
	passlength += str.length;
	if(writeStream.write(str)===false){
		readStream.pause();
	}
});
writeStream.on("drain",function(){
	readStream.resume();
});
readStream.on("end",function(){
	writeStream.end();
});

//不断更新控制台的信息
setTimeout(function show(){
	//读取百分比
	var percent = Math.ceil((passlength/totalSize)*100);
	//上传了多少KB
	var size = Math.ceil(passlength/1024);
	//上传的速度
	var diff = size - lastSize;
	lastSize = size;
	//清除当前行
	out.clearLine();
	//光标指向第0个位置
	out.cursorTo(0);
	out.write("已完成" + size + "KB," + percent + "%,速度为" + diff*2 + "KB/s");
	if(totalSize>passlength){
		setTimeout(show,500);
	}else{
		var endTime = new Date();
		console.log();
		console.log("当前文件已经完成共计时："+(endTime - startTime)/1000+"秒");
	}
},500);

