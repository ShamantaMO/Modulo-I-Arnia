const io = require('../io/io')

io.write('Informe o numero')
const numero = io.readInt()
const resto = numero % 2 

if (resto === 0) {
    io.write('Este numero é par!')    
}
if (resto !== 0) {
    io.write('Este numero é impar!')
}
