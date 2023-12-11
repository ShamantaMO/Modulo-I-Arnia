const io = require('../io/io')

let mult = 0

io.write('Digite o numero desejado')
const numero = io.readInt()

while(mult <= numero){
    mult = mult + 5
    io.write(mult)
    
}


