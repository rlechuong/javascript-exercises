const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	// const arraySum = array.reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0);

  const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return arraySum;
};

const multiply = function(array) {
  // const arrayProduct = array.reduce(function (accumulator, currentValue) {
  //   return accumulator * currentValue;
  // })

  const arrayProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue);

  return arrayProduct;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let numArray = [];

  for (i = 0; (num - i) > 0; i++) {
    numArray.push(num - i);
  }

  // const fact = numArray.reduce(function(accumulator, currentValue) {
  //   return accumulator * currentValue;
  // }, 1);

  const fact = numArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  return fact;
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
