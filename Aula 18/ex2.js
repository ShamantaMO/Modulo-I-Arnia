const io = require('../io/io')

//Mostrar uma mensagem para o usuario
io.write('Digite o numero para multiplica-lo por 2:')
//Receber o numero do usuario
const numero = io.readInt()
io.write(`Obrigado! numero digitado foi: ${numero}`)
//Dobrar numero digitado
const resultado = numero * 2
//Mostrar o resultado do calculo
io.write(`O dobro do numero digitado é: ${resultado}`)