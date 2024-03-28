let carro_array=[
    {id: 1, marca: "Lamborghini", modelo:'Aventador'},
    {id: 2, marca: "Lamborghini", modelo:'GT'},
    {id: 3, marca: "Pagani", modelo:'zonda r'},
    
]

for (let carro of carro_array) {
    console.log(`Marca: ${carro.marca} | Modelo: ${carro.modelo}`)
}