const io = require('../io/io')

let i = 1

let soma = 0


while(i <= 20){
    io.write('Informe o numero:')
    soma += io.readInt()
    i++
}

let media = soma / 2
io.write(`A media dos numeros é: ${media}`)