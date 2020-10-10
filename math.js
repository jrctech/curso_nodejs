function add(x1,x2){
	return x1+x2;
}
function substract(x1,x2){
	return x1-x2;
}
function multiply(x1,x2){
	return x1*x2;
}
function divide(x1,x2){
	if(x2 != 0)
		return x1/x2;
	else{
		console.log("Can't divide by zero!!");
		return null;
	}
}

/*

//This way we can export functions from the module:
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/

//This way we can export an object containing functions also:
Math = {};
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;