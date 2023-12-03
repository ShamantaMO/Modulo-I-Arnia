const io = require('../io/io')

io.write('Informe um numero:')
const numero = io.readInt()
let resultado = ''

if(numero === 10){
    resultado = 'Numero é igual a 10'
} else {
    resultado = 'O numero é diferente de 10'

    io.write(resultado)
}