const io = require('../io/io')

io.write('Informe um numero:')
const numero  = io.readInt()

if(numero >= 1 && numero <= 100){
    io.write('Numero valido')
} else {
    io.write('Numero Invalido')
}