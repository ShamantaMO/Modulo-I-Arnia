const io = require('../io/io')

let funcionarios = []

for(let i = 0; i < 2; i++){
    io.write('Informe o nome')
    const nome = io.read()
    io.write('Informe a matricula')
    const matricula = io.readInt()
    io.write('Informe o cargo')
    const cargo = io.read()
    io.write('Informe o salario')
    const salario = io.readFloat()

    const funcionario= {
        nome,
        matricula,
        cargo,
        salario
    }
    funcionarios.push(funcionario)
}

io.write(funcionarios)

funcionarios = funcionario.filter(funcionario =>{
    if(funcionarios.salario > funcionarios.length){
        return funcionario.salario += funcionario.salario + 0.1
    }
})
io.write(alunos)