const io = require('../io/io')

const n = []
const n2 = []

for (let i = 0; i < 10; i++){
    io.write('Digite um numero')
    let inf = io.readInt()
    n.push(inf)
}

    for (let i = 0; i < 10; i++){
        const suc = n[i] + 1 
        n2.push(suc)
    }

io.write(n2)