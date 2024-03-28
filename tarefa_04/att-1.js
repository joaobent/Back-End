import input from 'readline-sync'


function mai(text) {
    let textmai= text.toUpperCase()
    return textmai
}
let textmai= input.question("Digite um texto para ele se converter para caixa alta: ")


console.log(mai(textmai))