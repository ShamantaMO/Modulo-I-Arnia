const io = require('..io/io')

io.write('Informe o primeiro numero')
const numero1 = io.readInt()

io.write('Informe o primeiro numero')
const numero2 = io.readInt()

io.write('Informe o primeiro numero')
const numero3 = io.readInt()

if (numero1 < numero2 + numero3 && numero2 < numero1 + numero3 && numero3 < numero1 + numero2){
    io.write ('O tringulo existe')
}else {
    io.write('O tringulo não existe')
}