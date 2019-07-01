/*
 * 事件以及事件绑定
 */
//引入events模块
/*
 *EventEmitter类
 * 1.绑定数据node用那个包
 * 2.用包里的那个对象EventEmitter
 * 3.on()和once()的区别
 * 4.常用的绑定方法
 * 5.设置绑定最大数量setMaxListeners
 */
var events = require("events");
//创建绑定事件的监听类,只有绑定之后才能通过emit()来调用，使用顺序创建，on()绑定，emit()调用
var eventEmitter = new events.EventEmitter();//通过实例化 EventEmitter 类来绑定和监听事

//绑定方法
var contectHandler = function handler(){
	console.log("绑定成功！");
	eventEmitter.emit("emit_function");
}
//绑定名称 以及 绑定方法
eventEmitter.on("contection",contectHandler);//on("调用名称"，匿名函数或函数名)；

eventEmitter.on("emit_function",function(){
	console.log("恭喜你连接成功");
});
eventEmitter.emit("contection");
console.log("绑定执行成功");

