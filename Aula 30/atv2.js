const io = require('../io/io')

const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9 },
    { id: 2, nome: 'Calça', preco: 59.9 },
    { id: 3, nome: 'Tênis', preco: 99.9 }
]

function calcularTotal(produtos) {
    const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco
    }, 0)
    
    return total
}

const total = calcularTotal(produtos)
io.write(total)