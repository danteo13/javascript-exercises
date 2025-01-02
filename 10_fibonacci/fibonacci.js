const fibonacci = function(nth) {
    let result;
    if(typeof nth === 'string') {
        nth = parseInt(nth);
    }

    if (nth < 0) return "OOPS";
    if (nth === 0) return 0;
    
    let previousFirst = 1;
    let previousSecond = 0;

    for(let i = 2; i <= nth; i++) {
        let current = previousFirst + previousSecond;
        previousSecond = previousFirst;
        previousFirst = current;
    }
    return previousFirst;
};

// Do not edit below this line
module.exports = fibonacci;
