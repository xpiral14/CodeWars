function smallerValues(num = [], value) {
    smallerThen = value;
    return num.filter(number => {
        return number < value
    })
    
}

function sumTwoSmallestNumbers(number){

    var positives = numbers.filter((num) => {
        return num > 0 && (num % 2 ==0 || num % 2 == 1)
    })
    smaller = positives.reduce((a,b) => {
        return Math.min(a, b)
    });
    secondSmallerFilter = positives.filter(num => {
        return num !== smaller && num > 0
    })
    secondSmaller = secondSmallerFilter.reduce((a,b) => {
        return Math.min(a, b)
    });

    return smaller + secondSmaller
}
console.log(sumTwoSmallestNumbers([1, 15000, -5, 14, 10]))