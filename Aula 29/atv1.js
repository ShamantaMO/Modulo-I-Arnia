const io = require('../io/io')

class Carro {
    constructor(nome, preço, anoLançamento){
        this.nome = nome
        this.preço = preço
        this.anoLançamento = anoLançamento
    }
    
    aPreco() {
        this.preço += 5000
    }
}

let carros = []

for (let i = 0; i < 10; i++){
io.write(`Digite o ${i + 1} nome:`)
const nome = io.read()
io.write(`Digite o ${i + 1} preço:`)
const preço = io.readFloat()
io.write(`Digite o ${i + 1} ano:`)
const ano = io.read()

const carro = new Carro(nome, preço, ano)
carros.push(carro)

}

io.write(carros)

carros.forEach((carro) => {
    carro.aPreco()
})

io.write(carros)


