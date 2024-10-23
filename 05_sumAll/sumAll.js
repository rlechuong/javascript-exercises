const sumAll = function(num1, num2) {
    let finalSum = 0;

    if (num1 < 0 || num2 < 0 || !(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return "ERROR";
    }

    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    for (i = num1; i <= num2; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
