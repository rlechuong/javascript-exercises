const reverseString = function(word) {
    let wordArray = word.split("");
    let reversedWord = "";

    for (i = 0; i < wordArray.length; i++) {
        reversedWord += wordArray[wordArray.length - (i + 1)];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
