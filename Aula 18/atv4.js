const io = require('../io/io')

io.write ('Informe o primeiro valor:')
const valor1 = io.readInt()

io.write ('Informe o segundo valor:')
const valor2 = io.readInt()

const resultado = (valor1 + valor2) /2

io.write(`A media dos valores é: ${resultado}`)
