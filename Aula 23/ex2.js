const io = require('../io/io')

const  n =  []

for (let i = 0; i < 5; i++){
    io.write('Digite o numero:')
    let inf = io.read()
    n.push(inf)    
}

n.reverse()
io.write(n)