const io = require('../io/io')

let contador = 0

io.write('Informe o numero de vezes que voce deseja repetir')
let numero = io.readInt()

io.write('Qual frase que voce deseja')
const frase = io.read()

while (contador < numero) {
    io.write(frase)
    contador++
}