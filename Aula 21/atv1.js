const io = require('../io/io')

io.write('Quanto tempo você fuma?:')
const tempo = io.readInt()

io.write('Quantos cigarros você fuma por dia?:')
const cigarro = io.readInt()

io.write('Qual valor do seu cigarro?:')
const valor = io.readInt()

const CigarroTotal = tempo * 365  * cigarro

const Gastos = (CigarroTotal / 20) * valor

io.write(`O valor gasto por ano foi: ${Gastos}`)