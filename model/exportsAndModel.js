/*
 * exports和module.exports属性规则
 * 一般用exports来引入方法以及属性
 * 其次用module.exports来引入对象
 * 这样便于我们开发的规范性
 */
exports.setNum = function(){
	console.log("大家好，我是exports");
}

module.exports = function(){
	this.sayHello = function(){
		console.log("大家好，我是module.exports");
	}
}


