const findTheOldest = function(people) {
        
    const sorted = people.sort(function(a, b) {
        let aDeath = a.yearOfDeath;
        let bDeath = b.yearOfDeath;
        let date = new Date();
        if (a.yearOfDeath == undefined) {
            aDeath = date.getFullYear();
        }
        if (b.yearOfDeath == undefined) {
            bDeath = date.getFullYear();
        }
        if ((aDeath - a.yearOfBirth) > (bDeath - b.yearOfBirth)) {
            return 1;
        }
        else {
            return -1;
        }
    });
    let oldest = sorted[sorted.length-1];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
