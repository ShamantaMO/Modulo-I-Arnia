const io = require('../io/io')

io.write('Informe um numero maior que 10:')
const numero = io.readInt()

if (numero > 10){
io.write('Numero recebido com sucesso')
} else {
    io.write('O numero informado é invalido')
}