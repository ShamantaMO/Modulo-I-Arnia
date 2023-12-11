const io = require('../io/io')

let n = []
let valorT = 0

for(let i = 0; i < 10; i++){
    io.write('Informe o preço do produto:')
    let preço = io.readFloat()
    n.push(preço)
    valorT += preço
}

let media = valorT / 10

for(i = 0; i < n.length; i++){
    if(n[i] < media){
        io.write(`O valor ${n[i]} é menor que a media ${media}`)
    }
}