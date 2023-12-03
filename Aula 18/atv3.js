const io = require('../io/io')

io.write('Digite o primeiro numero:')
const numero1 = io.readInt()

io.write('Digite o segundo numero:')
const numero2 = io.readInt()


const divisao = numero1 / numero2

io.write(`O resultado da divisão é: ${divisao}`)

