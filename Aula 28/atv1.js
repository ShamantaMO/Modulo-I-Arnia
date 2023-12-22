const io = require('../io/io')

const alunos = []

for(let i = 0; i < 10; i++){
    io.write('Informe o nome')
    const nome = io.read()
    io.write('Informe a idade')
    const idade = io.readInt()
    io.write('Informe o documento')
    const documento = io.readInt()

    const aluno = {
        nome,
        idade,
        documento
    }
    alunos.push(aluno)
}
const maioresIdade = alunos.filter((aluno)=>{
    return aluno.idade > 17    
})
io.write(maioresIdade)