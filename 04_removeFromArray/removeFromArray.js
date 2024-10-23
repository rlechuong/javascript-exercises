const removeFromArray = function(inputArray, ...inputArgs) {

    function checkNotMatching(inputArrayValue) {
        for (i = 0; i < inputArgs.length; i++) {
            if (inputArrayValue === inputArgs[i]) {
                return false;
            }
        }
        return true;
    }

    let filteredArray = inputArray.filter(checkNotMatching);

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
