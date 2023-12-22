const io = require("..//Io/io")


const estudantes = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Ana', idade: 21 }
    ]

function calcularDesconto(estudante){
    estudante.idade < 20 ? estudante.desconto = 0.1  : estudante.desconto = 0.05;
    return estudante
}

function aplicarDesconto(estudante, desconto){
    return estudante.map(desconto)
    
}

let resultado = aplicarDesconto(estudantes, calcularDesconto) 
io.write(resultado)