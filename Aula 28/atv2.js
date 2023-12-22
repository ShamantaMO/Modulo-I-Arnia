const io = require('../io/io')

let alunos = []

for(let i = 0; i < 10; i++){
    io.write('Informe o nome')
    const nome = io.read()
    io.write('Informe a matricula')
    const matricula = io.readInt()
    io.write('Informe a nota')
    const nota = io.readInt()

    const aluno = {
        nome,
        matricula,
        nota
    }
    alunos.push(aluno)
}

io.write(alunos)

alunos = alunos.filter(aluno =>{
    if(aluno.matricula > 1000){
        return aluno.nota += aluno.nota + 0.1
    }
})
io.write(alunos)