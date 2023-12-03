const io = require('../io/io')

let cont = 0

for(let i = 1; i < 10; i++){
    io.write('Digite um nome')
    const nome = io.read()

    if(nome === 'Maria'){
        cont++
    }
}

io.write(`A quantidade de Maria é:${cont}`)

