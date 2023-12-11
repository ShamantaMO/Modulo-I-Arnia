const io = require('../io/io')

io.write('Informe a frase desejada:')
const frase = io.read()

io.write('Informe a quantidade de vezes que a frase vai ser repetida:')
let quantidade = io.readInt()

let i = 1
while(i <= quantidade){
    io.write(frase)
    i++
}