frase = '4of Fo1r pe6ople g3ood th5e the2'

function order(words) {
    var numbers = '123456789'.split("");

    var wordArray = words.split(" ");
    
    var wordArrayDivided= [];
    for(let i = 0; i < wordArray.length; i++){
        wordArrayDivided.push(wordArray[i])
    }
    
    var worArrayAgain = wordArrayDivided.map((num) => {
        return num.split("")
    }) 
    var arrayNum  = []
    for(i = 0; i < worArrayAgain.length; i++){
        for(let j = 0; j < worArrayAgain[i].length; j++ ){
           if(parseInt(worArrayAgain[i][j]) > 0){
               arrayNum.push(worArrayAgain[i][j])

           }
        }
    }
    arrayNumOrdered = arrayNum.sort((a, b) => {
        return a -b
    })

    return arrayNum

}

console.log(order(frase));