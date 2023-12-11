const io = require('../io/io')

function calcularDobro(teste){
    const resultado = teste * 2
    io.write(resultado)
}

io.write('Digite um numero')
const numero = io.readInt()
calcularDobro(numero)