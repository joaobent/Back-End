import input from 'readline-sync'





for (let cont = 1; cont <= 10; cont++) {
    let nome = input.question('Digite seu nome: ')
    let sal = input.questionInt('Digite seu salario: ')

    if (sal <= 2100) {
        console.log(`            `)
        console.log(`Será Dispensado a taxa!`)
        console.log(`${nome} Não Pagara nada`)
        console.log(`            `)
        
    } else if (sal <= 2800) {
        console.log(`            `)
        let taxa = sal * 0.075
        console.log(`A taxa é de 7,5%! `)
        console.log(`${nome} vai pagar o valor de ${taxa.toFixed(2)}`)
        console.log(`            `)

    } else if(sal<=3750){
        let taxa= sal*0.15
        console.log(`            `)
        console.log(`A taxa é de 15%`)
        console.log(`${nome} vai pagar o Valor de ${taxa.toFixed(2)}`)
        console.log(`            `)

    } else if (sal<=4660){
        let taxa= sal*0.225
        console.log(`            `)
        console.log(`A taxa é de 22.5%`)
        console.log(`${nome} vai pagar o Valor de ${taxa.toFixed(2)}`)
        console.log(`            `)

    } else if (sal>4660){
        let taxa= sal*0.275
        console.log(`            `)
        console.log(`A taxa é de 27.5%`)
        console.log(`${nome} vai pagar o Valor de R$${taxa.toFixed(2)}`)
        console.log(`            `)
    }
}