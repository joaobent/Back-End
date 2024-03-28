// let multiplicador= 8;
// for (let contador = 0; contador <=10; contador++) {
//     let res= contador* multiplicador ;
//     console.log(multiplicador+'x'+ contador +'='+ res)
    
// }

let aluno={
    nome:'Marcos',
    email:'marcos@email.com',
    idade:25,

}
 for(let dados in aluno) {
    console.log(dados+': '+ aluno[dados])
 }