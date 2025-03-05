const reverseString = function(string) {

    let stringArray = string.split("");
    let stringArrayLength = stringArray.length;
    let reversedString = "";

    for (i = stringArrayLength; i > 0; i--) {
        reversedString += stringArray[i-1];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
