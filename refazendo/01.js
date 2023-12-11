const io = require('../io/io')

io.write('Informe seu nome:')
const nome = io.read()

io.write('Informe seu e-mail:')
const email = io.read()

io.write(`Seus dados pessoais são:${nome} e ${email}`)
