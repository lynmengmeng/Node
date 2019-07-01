var express = require("express");
//需要执行express方法
var app = express();
//创建服务
var server = require("http").createServer(app);

var io = require("socket.io").listen(server);
//存放聊天室的用户名
var users = [];
// http://192.168.0.215:8888
//http://192.168.0.215:8888/wode/
//路由 通过我不同的请求路径 来跳转到 不同的页面
app.use('/', express.static(__dirname + '/www'));

//获取服务端的连接
io.on("connection",function(socket){
//	//接收服务端的数据
//	scoket.on("say",function(data){
//		console.log(data);
//	})
	socket.on("login",function(nickname){
		if(users.indexOf(nickname)>-1){
			socket.emit("nicknamechongfu");
		}else{
			socket.userIndex = users.length;
			socket.nickname = nickname;
			users.push(nickname);
			socket.emit("loginSuccess");
			//向所有用户发送socket
			io.sockets.emit('system',nickname,users.length,"登录");
		}
	});
	socket.on("disconnect",function(){
		users.splice(socket.userIndex,1);
		//通知除自己以外人看到
		socket.broadcast.emit('system',socket.nickname,users.length,'退出');
	});
	//接受消息
	socket.on("postMsg",function(msg){
		socket.broadcast.emit('newMsg',socket.nickname,msg);
	})
	//接受图片
	socket.on("sendImg",function(imgdata){
		socket.broadcast.emit('reqImg',socket.nickname,imgdata);
	})

});

server.listen(8888);
console.log("服务器启动成功！！！");
