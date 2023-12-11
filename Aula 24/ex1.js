const io = require('../io/io')

function somarNumeros(n1, n2){
    const SomaDosNumeros = n1 + n2

    return SomaDosNumeros
}

io.write('Informe o 1° numero:')
const numero1 = io.readInt()

io.write('Informe o 2° numero:')
const numero2 = io.readInt()
const soma = somarNumeros(numero1, numero2)

io.write(`A soma dos numeros é: ${somas}`)