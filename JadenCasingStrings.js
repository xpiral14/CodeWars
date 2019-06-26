//Retorna a frase com todas as letras iniciais capitalizadas
String.prototype.toJadenCase = function(){
    var wordArray = this.split(" ")
    var wordCapitalize = wordArray.map(word => {
        return word[0].toUpperCase() + word.slice(1, word.length)
    }).join(" ");
    return wordCapitalize;
}