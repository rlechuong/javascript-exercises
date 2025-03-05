const sumAll = function(firstNum, secondNum) {
    
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    }

    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    sum = 0;

    let smallerNum = 0;
    let biggerNum = 0;

    if (firstNum < secondNum) {
        smallerNum = firstNum;
        biggerNum = secondNum;
    }
    else {
        smallerNum = secondNum;
        biggerNum = firstNum;
    }

    for (i = smallerNum; i <= biggerNum; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
