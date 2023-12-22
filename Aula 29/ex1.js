const io = require('../io/io')

class Pessoa {
    
}

io.write('Cadastro de Pessoas')
for (let i = 0; i < 3; 
    i++){
        io.write(`Informe o ${i + 1} ID`)
        const id = io.readInt()
        io.write(`Informe o ${i + 1} nome`)
        const me = io.readInt()
    }