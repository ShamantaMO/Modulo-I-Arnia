const io = require('../io/io')

let iterador = 1
let soma = 0

while(iterador <= 100){
    soma = soma + iterador
    io.write(`O valor de soma atual é ${soma}`)
    iterador++
}