const io = require('../io/io')

const numeros = [ 1000, 40, 340, 501, 500, 1093, 245, 21]

 let multiplicacao = numeros.map((numero) => {
    if(numero % 2 === 0 ){
        return numero * 4
    }else{
        return numero * 3
    }
})
io.write(multiplicacao)
let numerosMenoresque100 = multiplicacao.filter((menores) =>{
    
    return menores < 100
})
io.write('Números menores que 100:')
io.write(numerosMenoresque100)
