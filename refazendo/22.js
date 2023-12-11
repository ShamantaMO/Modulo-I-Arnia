const io  = require('../io/io')

io.write('Informe o numero de vezes')
let n = io.readInt()

for(i = n; i >= 0; i--){
    io.write(i)
}