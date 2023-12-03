
const io = require('../io/io')

const  nome =  []

for (let i = 0; i < 5; i++){
    io.write('Digite o nome:')
    let inf = io.read()
    nome.push(inf)    
}

nome.sort()
io.write(nome)