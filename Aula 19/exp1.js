const io = require('../io/io')

io.write("Informe o nome do pais")
const pais = io.read()

if (pais === 'Brasil') {
    io.write("Pais recebido com sucesso")
}
io.write(pais)