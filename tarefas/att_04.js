class Veiculo{
    marca;
    modelo;
    ano;
    exibirDetalhes(){
        return`O modelo ${this.modelo} é da marca ${this.marca} do ano ${this.ano}`
    }
}

const Carro = new Veiculo();
Carro.marca = "Toyota"
Carro.modelo= "Corolla"
Carro.ano= 2022
console.log(Carro.exibirDetalhes())

const Motocicleta = new Veiculo();
Motocicleta.marca= "honda"
Motocicleta.modelo= "CBR 600RR"
Motocicleta.ano=2021
console.log(Motocicleta.exibirDetalhes())