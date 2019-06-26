// My best friend has an adorable 3 year old kid. Everytime I go to visit them, she wants to impress me by showing off her counting skill. Up till now, she is able to count up to n. However, there is a problem with her counting: she always forgets even numbers. Your task in this kata is to be able to count like her. For convenience let's put the numbers she is able to count in an array. Good luck mate!

function kidoCount(n) {
    var count = []
    for(let i = 1; i <= n; i++){
        if(i% 2 === 1){
            count.push(i)
        }
    }
    return count
}

console.log(kidoCount(9));
