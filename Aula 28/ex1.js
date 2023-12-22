

const pessoa1 = {nome: 'Maria da Silva', dataNascimento: '15/07/1978', profissao: 'Advogada'}

const pessoa2 = {
    nome: 'Joao da Silva',
    dataNascimento: '05/09/1998',
    profissao: 'Medico'
}

console.log(pessoa1)
console.log(pessoa2)

console.log(pessoa1.nome)
console.log(pessoa1.dataNascimento)
console.log(pessoa1.profissao)

pessoa2.nome = 'Joao da Silva Santos'
console.log(pessoa2)

delete pessoa2.dataNascimento
console.log(pessoa2)


