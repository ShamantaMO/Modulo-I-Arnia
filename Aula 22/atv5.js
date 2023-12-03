const io = require('../io/io')

io.write('Digite um numero')
const n = io.readInt()

for (let i = 0; i < n; i++){
    if(i % 2 === 0){
        io.write(i)
    }
}