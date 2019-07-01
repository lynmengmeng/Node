/*
缓冲器模块可以被用来创建缓冲区和SlowBuffer类
一个 Buffer 类似于一个整数数组，
 *buf.write(string[, offset[, length]][, encoding])
 * 第一个参数，读取的字符串
 * 第二个参数，从第几个索引开始读取
 * 第三个参数 读取的长度
 * 第四个参数 编码集
 *
 * 最大长度为256的字节流
 * 字节流 快捷迅速读取文件最高效的方式之一
 * utf-8 是默认的编码方式，此外它同样支持以下编码：
 * "ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
 */
var buf = new Buffer(256);//方法 1 创建长度为 256 字节的 Buffer 实例
var len = buf.write("李老师","utf-8");//buf.write()写入缓冲区
console.log(len);
//buf.toString(encoding[,start[,end]]);
//如何去读取字节流
var buf = new Buffer(26);
for(var i=0;i<26;i++){
	buf[i] = 97+i;
}
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",5,16));
console.log(buf.toString("utf8"));
//以字节流的形式进行存储
//传输的效率和机器运算的效率
var buf = new Buffer("田蒙","utf-8");//方法二 通过一个字符串来创建 Buffer 实例：
var jsons = buf.toJSON(buf);
console.log(jsons);

var buf = new Buffer([10, 20, 30, 40, 50]); //方法三 通过数组来创建Buffer 实例


var buf1 = new Buffer("today");
var buf2 = new Buffer("nice");
var buf3 = Buffer.concat([buf1,buf2]);//字符串拼接，必须为数组对象
console.log("拼接的字符串为："+buf3.toString());

var buf1 = new Buffer("abcae");
var buf2 = new Buffer("abcae");
var result = buf1.compare(buf2);

if(result<0){
	console.log("buf1在buf2的前面");
}else if(result>0){
	console.log("buf1在buf2的后面");
}else{
	console.log("相等");
}

//copy
var buf1 = new Buffer("nice to meet you");
var buf2 = new Buffer(16);
buf1.copy(buf2);
console.log("buf2字符串为："+buf2.toString());

//截取字符串
var buf3 = buf2.slice(0,13);
console.log("buf3字符串为："+buf3.toString());

//返回字符串的长度

console.log("buf3的长度为"+buf3.length);

