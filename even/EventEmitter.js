/*
 *EventEmitter类
 */
var EventEmitter = require("events").EventEmitter;
var eventEmitter = new EventEmitter();
/*
 *只允许调用一次然后自动解绑
 */
eventEmitter.once("contection",function(){
	console.log("只运行一次，运行后自动解绑");
});

eventEmitter.emit("contection");
eventEmitter.emit("contection");

var callback = function(){
	console.log("绑定成功");
}

eventEmitter.on("connection",callback);

eventEmitter.emit("connection");
eventEmitter.removeListener("connection",callback);
/*解除移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

它接受两个参数，第一个是事件名称，第二个是回调函数名称（只能是事件的回调函数的名称）。*/
eventEmitter.emit("connection");
eventEmitter.emit("connection");

//创建绑定事件方法
var life = new EventEmitter();
life.setMaxListeners(3);	//同样的名称绑定数不能超过3，设置绑定的最大数量
life.on("wife",function(hum){
	console.log("给"+hum+"揉揉腿！");
});
life.on("wife",function(hum){
	console.log("给"+hum+"揉揉肩！");
})
life.on("wife",cook);
function cook(hum){
	console.log("给"+hum+"做饭！");
}
function resize(hum){
	console.log("让"+hum+"交工资！");
}
function washing(hum){
	console.log("让"+hum+"洗衣服");
}
life.on("husband",resize);
life.on("husband",washing);
life.emit("husband","老公");
life.emit("wife","老公");
//life.listeners("husband")是一个名称绑定事件的数组集合
console.log("老公一共做了"+life.listeners("husband").length+" 件事情");
console.log("老婆一共做了"+life.listeners("wife").length+" 件事情");
