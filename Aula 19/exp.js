const io = require('../io/io')

io.write('Informe o pais')
const pais = io.read()

if(pais === "Brasil" || pais === 'Portugal'){
    io.write("Este pais fala portugues")
}