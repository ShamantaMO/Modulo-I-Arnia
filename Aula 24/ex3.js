const io = require('../io/io')

function calcularVEsfera(r){
    const resultado = 4 / 3 * 3.14 * (r ** 3)
    return resultado 
}

io.write('--- Calculo do volume de uma esfera ---')
io.write('Escreva o valor do raio:')
const raio = io.readFloat()
const volume = calcularVEsfera(raio)

io.write(`O volume dessa esfera é:${volume}`)