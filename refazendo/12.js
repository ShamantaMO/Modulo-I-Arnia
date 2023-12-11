const io = require('../io/io')

io.write('Informe o 1° numero')
let n1 = io.readInt()

io.write('Informe o 2° numero')
let n2 = io.readInt()

let produto = n1 * n2

if(produto > 10){
    io.write(`O produto de ${n1} e ${n2} é maior que 10`)
}else if(produto < 10){
    io.write(`O produto de ${n1} e ${n2} é menor que 10`)
}