const io = require('../io/io')

let alunos = []
let notas = []
let quantidade = 10

for(i = 0; i < quantidade; i++){
    io.write('Informe o nome do aluno:')
    const nome = io.read()
    alunos.push(nome)
}
for(i = 0; i < quantidade; i++){
    io.write(`Informe a nota do aluno ${alunos[i]}`)
    const nota = io.readInt()
    notas.push(nota)
}
for(i = 0; i < quantidade; i++){
    io.write(`A nota do aluno ${alunos[i]} é ${notas[i]}`)
}
for(i = 0; i < quantidade; i++){
    if(notas[i] > 7){
        io.write(`A nota do ${alunos[i]} é maior que 7`)
    }else if(notas[i] < 7){
        io.write(`A nota do ${alunos[i]} é menor que 7`)
    }
}
