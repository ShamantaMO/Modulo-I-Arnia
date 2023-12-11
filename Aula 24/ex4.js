const io = require('../io/io')

function calcularmedia(n1, n2, n3, tipomedia){
    if(tipomedia === 'p'){
        const media = (n1 + n2 + n3) / 3
        io.write(`Media de notas: ${media}`)
    }else if (tipomedia === 'P'){
        const mediaPonderada = ((n1 * 5) + (n2 * 3) + (n3 * 2)) / 10
        io.write(`Media ponderada:${mediaPonderada}`)
    }else {
        io.write('Informe o tipo corretamente')
    }
}

io.write('Informe a nota 1:')
const nota1= io.readFloat()
io.write('Informe a nota 2:')
const nota2 = io.readFloat()
io.write('Informe a nota 3:')
const nota3 = io.readFloat()
io.write('Tipo de media: (A ou P)')
const tipo = io.read()

calcularmedia(nota1, nota2, nota3, tipo)