var util = require("util");
var Father = require("./father");
module.exports = Son;
function Son(){
	this.name = "儿子";
	this.sex = "女";
	this.setName = function(name){
		this.name = name;
	}
	this.setSex = function(sex){
		this.sex = sex;
	}
	Father.call(this);		//儿子继承父亲的私有属性和方法，但是会覆盖儿子原有的一些属性
}
util.inherits(Son,Father);

