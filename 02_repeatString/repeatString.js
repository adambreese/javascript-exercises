const repeatString = function(string, num) {
    let strung = '';
    if (num >= 0) {
        while (num) {
            strung += string;
            num--;
        }
    }
    else {
        strung = 'ERROR';
    }
    
    return strung;
};

// Do not edit below this line
module.exports = repeatString;
