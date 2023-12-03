const io = require('../io/io')

let nr
fatorial = 1

io.write('Informe um numero:')
nr = io.readInt()

while(nr > 1){
    fatorial = fatorial * nr
    nr = nr - 1
}

io.write(`O fatorial é: ${fatorial}`)
