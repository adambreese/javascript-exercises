const palindromes = function (string) {
    let check = Array.from(string.toUpperCase());
    console.log(check);
    // filter for letters
    const filtered = check.filter((letter) => letter.toLowerCase() != letter.toUpperCase());
    console.log(filtered);
    // does reverse = string?
    let reversed = filtered.slice();
    reversed.reverse();

    return (reversed.every((value, index) => value === filtered[index]));
};

// Do not edit below this line
module.exports = palindromes;
