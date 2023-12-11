const io = require('../io/io')

function Potencia(X, Z) {
    let resultado = 1;
  
    
    for (let i = 0; i < Z; i++) {
      resultado *= X;
    }
  
    return resultado;
  }
  

io.write('Calculando a potencia de 3²')
const resultado = Potencia(3, 2)
io.write(`O resultado é:${resultado}`)