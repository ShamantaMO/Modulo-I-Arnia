const io = require('../io/io')

io.write('Informe o 1° numero')
let n1 = io.readInt()

io.write('Informe o 2° numero')
let n2 = io.readInt()

if(n1 > n2 ){
    io.write(`O numero ${n1} é maior que ${n2}`)
}else if(n2 >n1){
    io.write(`O numero ${n2} é maior que ${n1}`)
}
