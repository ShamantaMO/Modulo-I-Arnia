const io = require('../io/io')

io.write('Informe o numero primeiro numero:')
const numero1 = io.readInt()

io.write('Informe o segundo numero:')
const numero2 = io.readInt()

io.write('Resultado')
const produto = numero1 * numero2

if (produto > 10 ){
    io.write(`O resulto do produto dos numeros ${numero1} e ${numero2} é maior que 10`)
} else {'O produto é menor que 10'}


