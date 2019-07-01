/*继承
 * util.inherits
 */
var util = require("util");
var Base = function(){
	this.name = "张三";
	this.base = 1991;
	this.say = function(){
		console.log("你好！我是"+this.name);
	}
}

Base.prototype.displayName = function(){
	console.log("我的名字是："+this.name);
}

var Sub = function(){
	this.name = "菠菜";
}

util.inherits(Sub,Base);	//Sub继承Base,只能继承方法
var base = new Base();
base.say();
base.displayName();
var sub = new Sub();
sub.displayName();
sub.say();
//只有Base额外添加的属性才可以继承，父亲特有的属性和方法无法继承，父亲后来有的方法可以继承，所以say()不能被调用

console.log(sub);