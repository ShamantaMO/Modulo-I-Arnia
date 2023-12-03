const io = require('../io/io')

let Mvalor = 0

for(let i = 0; i < 10; i++){
    io.write('Escreva o numero')
    const n = io.readInt()
    
    if(n > Mvalor){
        Mvalor = n
    }
}

io.write(`O maior numero é: ${Mvalor}`)
