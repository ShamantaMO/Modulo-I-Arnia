const io = require('../io/io')

io.write('Defina a quantidade de repetições')
const rept = io.readInt()

for(let i = 0; i < rept; i++){
    io.write('Arnia Escola de Programação')
}