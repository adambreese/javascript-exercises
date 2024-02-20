const sumAll = function(int1, int2) {
    // initialize a sum variable to store the sum
    let sum = 0;
    let smallerInt = int1;
    let largerInt = int2;

    if (int1 < 0 || int2 < 0 || typeof(int1) != 'number' || typeof(int2) != 'number') {
        return "ERROR";
    }
    // check if int2 integer is smaller and reassign
    if (int2 < int1) {
        smallerInt = int2;
        largerInt = int1;
    }
   
    // iterate through integers from smaller to and including larger
    for (i = smallerInt; i <= largerInt; i++) {
        sum += i;
    }
    // return sum variable
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
