const io = require('../io/io')


io.write('Informe os numeros desejados(separe por virgula)')
let n = io.read()

let lernumeros = n.split(',')

let soma = 0

for (let i = 0; i < lernumeros.length; i++ ){
    soma = soma + lernumeros[i]
}

io.write(`A soma dos numeros é: ${soma}`)