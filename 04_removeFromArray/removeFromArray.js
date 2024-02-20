const removeFromArray = function(array, ...toRemove) {
    newLength = array.length
    for (i = 0; i < newLength; i++) {
        for (j = 0; j < toRemove.length; j++) {
            if ((array.at(i) == toRemove.at(j)) && typeof(array.at(i)) == typeof(toRemove.at(j))) {
                array.splice(i, 1);
                newLength--;
                i--;
                console.log(array);
            }        
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
