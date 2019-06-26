const binaryArrayToNumber = arr => {
    var binaryCode =arr,
        i, 
        calculateDecimal = binaryCode.reverse().map(num => parseInt(num)),
        total = 0;
    while (binaryCode[i] === 0) {
        binaryCode.pop();
        i++
    }
    for (let i = 0; i < calculateDecimal.length; i++) {
        total += (2 ** i) * calculateDecimal[i]
    }
    return total
};