/*基本引入模块的方法
 */
function Model(){
	var name;
	this.setName = function(myname){
		name = myname;		
	}
	this.sayHello = function(){
		console.log("新年好，我是"+name);
	}
}
module.exports = Model;  //引入Model
