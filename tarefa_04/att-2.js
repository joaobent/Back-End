import input from 'readline-sync'

function saber(num) {
    return num[num.length -1]%2==0 ? "Par" : "Impar"
}

let number= input.question('Digite um numero para saber se ele e par ou impar: ')

console.log(saber(number))