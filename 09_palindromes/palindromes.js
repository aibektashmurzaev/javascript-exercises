const palindromes = function (string) {
    const alphabetNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const filteredString = string.toLowerCase().split('').filter((character) => alphabetNumeric.includes(character)).join('');

    const reversedString = filteredString.split('').reverse().join('');

    return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
