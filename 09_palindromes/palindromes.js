const palindromes = function (string) {

    let lowerString = string.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    let length = string.length / 2;
    let palindrome = false;

    for (i = 0; i < length; i++) {
        if (lowerString[i] === lowerString[lowerString.length - 1 - i]) {
            palindrome = true;
        }
        else {
            palindrome = false;
            break;
        }
    }

    return palindrome;
};

// Solution seems much more efficient

// Do not edit below this line
module.exports = palindromes;
