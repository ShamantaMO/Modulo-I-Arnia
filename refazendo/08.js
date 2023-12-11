const io = require('../io/io')

io.write('Informe o 1° numero:')
let n1 = io.readInt()

io.write('Informe o 2° numero:')
let n2 = io.readInt()

let resto = n1 % n2

io.write(`O resto de ${n1} / ${n2} é: ${resto}`)