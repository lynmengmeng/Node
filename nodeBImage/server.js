/*创建node服务器 以及如何引入require 用来引入我们的包
 */
//cmd中清屏操作，输入cls再回车,,,,,退出当前node  ctrl+c两次
var http = require('http');
var fs = require('fs');
var jsonRoot = 'D:/AllDemo/node/nodeBImage/img';//需要访问的本地文件的存放目录
var images = [];

http.createServer(function (req, res) {//req 是接受客户端请求的值  res 是返回给客户的值
	let url = req.url;
	let file = jsonRoot + url;
	fs.readdir(file, function(err, data){//err 为错误信息，data为目录下的文件数组列表
		 if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'application/json;charset="utf-8"'
            });
             // "content-Type":"text/plain","Accept-Charset":"utf-8"}头文件信息'Content-Type': 'text/plain;charset=utf-8'
             data.forEach( function (file){
              images.push(file.split('.')[0]);
             });
             console.log(images)
            res.write(images.join('","'));//将index.html显示在客户端
             res.write("\nhello world\n")
             res.end("这是我的第一个node服务器！");
        }
	})
}).listen(8668);//监听接口
console.log('Server running at http://127.0.0.1:8668/');
