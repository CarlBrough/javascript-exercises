const reverseString = function(string) {
    let charLength = string.length;
    let reversedString = "";
        for (i = charLength; i > -1; i--) {
            reversedString = reversedString + string.charAt(i);
        }
        return reversedString;
}

module.exports = reverseString
