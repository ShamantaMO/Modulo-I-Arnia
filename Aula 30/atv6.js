const io = require("..//Io/io")

const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9, quantidade: 2 },
    { id: 2, nome: 'Calça', preco: 59.9, quantidade: 1 },
    { id: 3, nome: 'Tênis', preco: 99.9, quantidade: 3 },
    { id: 4, nome: 'Meias', preco: 9.9, quantidade: 5 }
    ]

    function calcularTotalCompra(produto){
        return produto.reduce((acumulador, itens) => {
            return acumulador + itens.preco * itens.quantidade
        }, 0)
    }

const compraTotal = calcularTotalCompra(produtos)
io.write(compraTotal) 