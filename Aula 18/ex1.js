const io = require('../io/io')

io.write('Digite o seu nome')// = console.log
const nome = io.read()
io.write('O nome informado foi:' + nome)

io.write(`O nome informado foi: ${nome}`)  //interpolação