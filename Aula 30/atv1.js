const io = require('../io/io')

function somarValores(array) {
    if (array.length === 0) {
      return 
    }

    const soma = array.reduce((acumulador, itens) => {
      return acumulador + itens
    }, 0)
  
    return soma
  }

  const numeros = [1, 2, 3, 4, 5]
  const resultado = somarValores(numeros)
  io.write(resultado)