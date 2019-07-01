//阻塞代码
var fs = require("fs");
var data = fs.readFileSync('D:/AllDemo/node/fs/myfilecopy.txt');
console.log(data.toString());
console.log('程序执行结束！');

/*
 *非堵塞读取
 * 第一个参数 为文件的路径
 * 第二个参数 为编码集
 * 第三个参数 为回调函数（err,data）
 *
 */
var filePath = "D:/AllDemo/node/fs/myfilecopy.txt";
fs.readFile(filePath,function(err,data){
    if(err){//return console.log(err.toString());两者写法实现一样
        console.log(err.stack);
        return;

    }
    console.log(data.toString());
    console.log("读取完毕");
});
console.log("先运行这个再读取");
