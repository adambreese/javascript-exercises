const fibonacci = function(num) {
    
    if (num >= 0) {
        const sequence = Array(num);
        let lastItem = 0;
        let secondToLast = 1;
        for (i = 0; i < num; i++) {
            sequence[i] = lastItem + secondToLast;
            secondToLast = lastItem;
            lastItem = sequence[i];
        }
        return lastItem;
    }
    else {
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
