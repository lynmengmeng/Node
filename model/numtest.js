var count = 1;
var printNum = 0;

//赋值
function setPrintNum(num){
	printNum = num;
}
function setCount(num){
	count = num;
}
function addPrintNum(){
	printNum += count;
	console.log(printNum);
}
//引入function 方式
exports.setPrintNum = setPrintNum;
exports.setCount = setCount;
module.exports.addPrintNum = addPrintNum; 
