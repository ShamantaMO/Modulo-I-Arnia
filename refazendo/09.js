const io = require('../io/io')

io.write('Informe o 1° numero:')
let n1 = io.readInt()

io.write('Informe o 2° numero:')
let n2 = io.readInt()

let media = n1 + n2 / 2  

io.write(`A media de ${n1} + ${n2} é: ${media}`)