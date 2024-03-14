import receba from 'readline-sync';

let nome = receba.question('Digite seu nome: ');
console.log(`Olá, ${nome}`)

let x = receba.questionInt('Digite um numero: ');
let y = receba.questionInt('Digite outro numero: ');