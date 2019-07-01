//管道流  管道式读取
var fs = require("fs");
var pathRead = "D:/AllDemo/node/io/aaaa.txt";
var pathWrite = "D:/AllDemo/node/io/bbbb.txt";
//读取
var readStream = fs.createReadStream(pathRead);
//输入
var writeStream = fs.createWriteStream(pathWrite);
//边读边写
readStream.pipe(writeStream);
console.log("写入完毕");

