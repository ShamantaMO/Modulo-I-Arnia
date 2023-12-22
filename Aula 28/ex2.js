const io = require('../io/io')

io.write('Cadastro de Pessoas')
io.write('Informe o nome')
const nome = io.read()
io.write('Informe o seu CPF:')
const cpf = io.readInt()
io.write('Informe a sua data de nascimento')
const data = io.read()

const pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: data
}

io.write(`Nome:${pessoa.nome} | CPF: ${pessoa.cpf} | Data de Nascimento: ${pessoa.dataNascimento}`)