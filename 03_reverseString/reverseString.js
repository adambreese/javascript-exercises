const reverseString = function(string) {
    reversed = '';
    word = string;
    for (i = word.length-1; i >= 0; i--) {
        reversed = reversed + word.charAt(i);
        console.log(reversed);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
