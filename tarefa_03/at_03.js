import input from 'readline-sync'
let num, nume = Math.ceil(Math.random()*100);

do {
    num= input.questionInt('adivinhe um numero entre 1 a 100: ')
    if(num===nume){
        console.log('Parabens voce acertou o numero! ')
    }
    else if(num<nume){
        console.log('O numero digitado foi menor')
    }
    else if(num>nume){
        console.log('O numero digitado foi maior')
    }
} while (num!=nume);
