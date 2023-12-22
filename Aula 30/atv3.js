const io = require('../io/io')

function dobrarNumeros(numeros, dobrar) {
    return dobrar(numeros);
    
  }

  const dobrar = (numeros) => numeros.map(numero => numero * 2);

const numeros = [1, 2, 3, 4, 5]
const resultado = dobrarNumeros(numeros, dobrar)
io.write(resultado);
  