// Existe uma matriz com alguns números. Todos os números são iguais, exceto por um. Tente encontrar!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// É garantido que o array contém mais de 3 números.

// Os testes contêm alguns arrays enormes, então pense em performance.


function findUniq(arr) {
    var result = []
    //testing first element of arr
    if (i == 0 && arr[0] !== arr[1]) {
        if (arr.indexOf(arr[0], 1) === -1) {
            //return the first element if he is diferent than others
            return arr[0]
        }
    }
    //Testing other elements
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) return arr[i + 1]
    }
}
console.log(findUniq([0, 0, 0.55, 0, 0]));