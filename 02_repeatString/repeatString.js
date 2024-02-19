const repeatString = function(string, num) {
    let strung = '';
    while (num) {
        strung += string;
        num--;
    }
    return strung;
};

// Do not edit below this line
module.exports = repeatString;
