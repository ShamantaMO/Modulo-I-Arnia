const io = require('../io/io')

let int = 0 

io.write('Digite o numero desejado')
const numero = io.readInt()

while(int <= numero){
if(int % 2 === 0){   
    io.write(`${int} - Par`)
}else{
    io.write(`${int} - Impar`)
    }
    int++
}