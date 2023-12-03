const io = require('../io/io')

io.write('Digite o numero desejado:')
const numero = io.readInt()

io.write('Resultado')
const raiz = Math.sqrt(numero)

io.write (raiz)


