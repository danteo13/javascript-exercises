const palindromes = function (text) {
    let textToEvaluate = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return textToEvaluate === textToEvaluate.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes('racecar')); // true;
console.log(palindromes('Racecar')); // true;
