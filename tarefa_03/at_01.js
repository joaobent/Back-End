import end from 'readline-sync'

let num= end.question('Digite um numero para saber a tabuada: ')
let contador =0

console.log("Tabuada de multiplicação - Nº " + num);

while (contador<=10){
    let resultado= num*contador
    console.log(`${num} x ${contador} = ${resultado}`);
    contador++;
}