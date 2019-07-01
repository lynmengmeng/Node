/*
 *返回给前端JS JSon或者JsonP数据
 */
var http = require("http");
var fs = require('fs');
var url = require('url');
var buf = new Buffer(1479);
var path = "D:/AllDemo/node/web/myfile.txt";
var textSay = "";
var jsontest;

http.createServer(function(req,resp){
	if(req.url == "favicon.ico"){
		resp.writeHead(200,{'Content-Type':'image/x-icon'});
		resp.end();
		return;
	}
	//返回json类型数据
	//Access-Control-Allow-Origin 解决简单跨域
	resp.writeHead(200,{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
	//当页面请求读取内容的时候，才会进行文字读取

	var parames = url.parse(req.url,true).query;
	if(parames.readFile == 30){
		//拼接json
		//readFileTest();  无法同步

		textSay = fs.readFileSync(path,'utf8');
		console.log(textSay);
		console.log("读取！！！！！！！！！！！！！！！");
		jsontest = {"content":textSay};
		resp.end(JSON.stringify(jsontest));
	}
}).listen(8888);

console.log('服务器启动成功');



function readFileTest(){
	fs.open(path,"r+",function(err,fd){
	if(err) console.log("打开文件失败！："+err.toString());
	//效率更高的读取方式，通过字节流buf来进行读取
	//第一个参数
	//第二个参数 写入哪个字节流
	//第三个参数 从这个字节流哪个位置开始写
	//第四个参数 读取 文件中的长度
	//第五个参数  从文件中哪个位置 开始读取

	//读取文件
	//textSay = fs.read(fd,buf,0,buf.length,12).slice(0,bytes).toString();
fs.read(fd,buf,0,buf.length,12,function(err,bytes){		//一个汉字三个byte
		if(err) console.log("读取字节流失败！"+err.toString());
		console.log(bytes + "字节被读取！");
		if(bytes>0){
			console.log("读取到的文件为：" + buf.slice(0,bytes).toString());
			textSay = buf.slice(0,bytes).toString();
		}
});
	//关闭文件
	fs.close(fd,function(err){
		if(err) console.log("关闭失败"+err.toString());
		console.log("关闭成功");
	});
})
}
