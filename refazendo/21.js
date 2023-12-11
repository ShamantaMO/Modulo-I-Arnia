const io  = require('../io/io')

io.write('Informe o numero de vezes')
let n = io.readInt()

for(i = 1; i <= n; i++){
    io.write(i)
}