const io = require('../io/io')

let x = 1
let conta = 0 

while(x <= 20){
    io.write(`Digite o numero desejado: ${x} `)
    conta += io.readInt()
    x++
}

const media = conta / 20
io.write(`A média dos números informados é: ${media}`)





