let num=20
let n1=0, n2=1, nextTerm;
console.log('Sequência de Fibonacci:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


