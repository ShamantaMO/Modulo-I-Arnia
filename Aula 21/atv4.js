const io = require('../io/io')

let eleitores
let nulos
let brancos
let validos

io.write('Informe o numero total de eleitores:')
eleitores = io.readInt()

io.write('Informe o numero de votos nulos:')
nulos = io.readInt()

io.write('Informe o numero de votos brancos:')
brancos = io.readInt()

io.write('Informe o numero de votos validos:')
validos = io.readInt()

const porcetagembrancos = (brancos / eleitores) * 100
const porcetagemnulos = (nulos / eleitores) * 100
const porcetagemvalidos = (validos / eleitores) * 100

io.write('Resultados:')
io.write(`Porcetagem de votos brancos:${porcetagembrancos}`)
io.write(`Porcetagem de votos nulos:${porcetagemnulos}`)
io.write(`Porcetagem de votos validos:${porcetagemvalidos}`)