const io = require('../io/io')

let salario
let percentual

io.write('Informe o salario mensal:')
salario = io.readInt()

io.write('Informe o percentual de reajuste:')
percentual = io.readInt()

const reajuste = (percentual / 100) * salario
const nsalario = salario + reajuste

io.write(`O novo salario é:${nsalario}`)
