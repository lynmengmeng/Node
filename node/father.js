/*node.js定义对象不能用var Object = function（）{}形式来定义
 * 否则引入会有问题
 */
module.exports = Father;
function Father(){
	this.name = "爸爸";
	this.sex = "男";
	this.age = 40;
	this.sayName= function(){
		console.log("我的名字是："+this.name);
	}
}
Father.prototype.run = function(){
	console.log("我是"+this.name+"我是百米赛跑的冠军");
}


