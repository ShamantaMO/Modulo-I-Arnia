const io = require('../io/io')

io.write('Informe o numero primeiro numero:')
const numero1 = io.readInt()

io.write('Informe o segundo numero:')
const numero2 = io.readInt()

if (numero1 > numero2){
    io.write (`O numero ${numero1} é maior que ${numero2}`)
} else {
    io.write (`O numero ${numero1} é menor que ${numero2}`)
}


