const io = require('../io/io')

let maria = 'Maria'
let soma = 0
for(i = 0; i < 1; i++){
    io.write('Informe o nome:')
    let nome = io.read()
    if(nome === maria){
        soma += 1 
    }      
}

io.write(`Maria foi informado ${soma}`)