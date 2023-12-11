const io = require('../io/io')

io.write('Informe o valor de c:')
let c = io.readInt()

let resultado = c * 1.01^12

io.write(`O resultado é:${resultado}`)