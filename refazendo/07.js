const io = require('../io/io')

io.write('Informe o 1° numero:')
let n1 = io.readInt()

io.write('Informe o 2° numero:')
let n2 = io.readInt()

let produto = n1 * n2

io.write(`O produto de ${n1} x ${n2} é: ${produto}`)