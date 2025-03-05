const removeFromArray = function(array, firstArg, ...moreArgs) {

    let initialArray = array;

    for (i = 0; i < initialArray.length; i++) {
        if (initialArray[i] === firstArg) {
            initialArray.splice(i, 1);
            i--;
        }
    }

    let moreArgsLength = moreArgs.length;

    while (moreArgsLength > 0) {
        for (i = 0; i < initialArray.length; i++) {
            if (initialArray[i] === moreArgs[moreArgsLength-1]) {
                initialArray.splice(i, 1);
                i--;
            }
        }

        moreArgsLength--;
    }

    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
