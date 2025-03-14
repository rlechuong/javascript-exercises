const fibonacci = function(num) {

    if (num < 0) {
        return "OOPS";
    }
    
    let fibArray = [0, 1];

    for (i = 1; i < num; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i]);
    }

    return fibArray[num];
};

// Do not edit below this line
module.exports = fibonacci;
