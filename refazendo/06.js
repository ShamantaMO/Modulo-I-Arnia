const io = require('../io/io')

io.write('Informe um numero:')
let numero = io.readInt()

let raiz = Math.sqrt(numero)

io.write(`O resultado da raiz de ${numero} é: ${raiz}`)
