const io = require('../io/io')

const precos = [1000, 40, 340, 501, 500, 1093, 245, 21]

const descontoProdutos = precos.map((preco) => {
    if(preco > 500 ){
        return preco * 0.85
    }else{ 
        return preco
    }
})

io.write(descontoProdutos)