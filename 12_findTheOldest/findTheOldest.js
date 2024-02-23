const findTheOldest = function(people) {
    const sorted = people.sort((a, b) =>
    (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)
    ? 1 : -1);
    return sorted[sorted.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
