const io = require('../io/io')

for(let i = 0; i < 10; i++){
    io.write('Escreva seu nome')
    const nome = io.read()

    io.write(`O nomer informado foi: ${nome}`)
}