const io = require('../io/io')

io.write('Informe o valor do 1° produto')
let p1 = io.readFloat()

io.write('Informe o valor do 2° produto')
let p2 = io.readFloat()

let resultado = (p1 + p2) / 2

io.write(`A media de ${p1} e ${p2} é: ${resultado} `)
