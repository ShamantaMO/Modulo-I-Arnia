const io = require('../io/io')

let i = 0

io.write('Informe o numero:')
const numero = io.readInt()

while(i <= numero){
    if(i % 2 === 0){
        io.write(`${i} - Par`)
    }else{
        io.write(`${i} - Impar`)
    }
    i++
}
