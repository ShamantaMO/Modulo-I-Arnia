const io = require('../io/io')

io.write('Digite um numero')
const n = io.readInt()

for (let i = 1; i <= n; i++){
    io.write(i)
}