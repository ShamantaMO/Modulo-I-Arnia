const io = require('../io/io')
/* Faça um programa que receba dois numeros e imrima a diferença de pelo outro */

io.write('Digite o primeiro numero:')
const numero1 = io.readInt()

io.write('Digite o segundo numero')
const numero2 = io.readInt()

const diferença = numero1 - numero2

io.write(`A diferença entre os numero é: ${diferença}`)
