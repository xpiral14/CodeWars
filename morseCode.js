// var morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
// var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// var criptoFrase = 'a.... .   1   1';

// function decodeMorse(code) {
//     var fraseArray = [];
//     var sumFrase = ''
//     var fraseDescript = ''
//     //Cria um array para o codigo
//     let i = 0;

//     while(i < code.length){
//         if(code[i] === ' ' && code[(i + 1)] === ' '){
//             fraseArray.push(' ')
//             sumFrase = ''
//         }
//         else if(code[i] === ' ' && code[i + 1] !== ' '){
//             fraseArray.push(sumFrase)
//             sumFrase = ''
//         }
//         else{
//             sumFrase += code[i]
//         }
//         i++
//     }

//     console.log(fraseArray)
// }

// decodeMorse(criptoFrase)




decodeMorse = function (morseCode) {
   
    var alphabet = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        "/": " ",
        "-.-.--": "!",
        "·-·-·-": ".",
        "--··--": ","
    };
    var messageConverted = [];

    morseCode.split("   ").map((word) => {
        word.split(" ").map((letter) => {
            messageConverted.push(alphabet[letter])
        })
        messageConverted.push(" ")
    })
    messageConverted.pop()
    return console.log(messageConverted.join(""))
}

decodeMorse('.... . -.--   .--- ..- -.. .')