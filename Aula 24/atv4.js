const io = require('../io/io')

function Par(numero) {
    return numero % 2 === 0;
}


const resultado = Par(4)
io.write(`O resultado é:${resultado}`)


