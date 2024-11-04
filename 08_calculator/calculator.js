const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
   const sum = arr.reduce((total, current) => {
    return total + current;
   }, 0);

   return sum;
};

const multiply = function(arr) {
  const multiplied = arr.reduce((total, current) => {
    return total * current;
   }, 1);

   return multiplied;
};

const power = function(a, b) {
   let powered = 1;
	 for(let i=0; i<b; i++){
       powered *= a;
   }
   return powered;
};

const factorial = function(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
