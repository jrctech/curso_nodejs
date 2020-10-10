const math = require('./math.js');

console.log(math);

console.log("Sum 1+5: " + math.add(1,5));
console.log("Substract 1-5: " + math.substract(1,5));
console.log("Multiply 1*5: " + math.multiply(1,5));
console.log("Div 1/5: " + math.divide(1,5));
console.log("Div 1/0: " + math.divide(1,0));