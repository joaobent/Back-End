import input from 'readline-sync'


function square(num1, num2) {
    let soma= num1+num2
    return soma
}
let numero1= input.questionInt('Digite um numero: ')
let numero2= input.questionInt('Digite um numero: ')

console.log(`A soma é ${square(numero1, numero2)}`)