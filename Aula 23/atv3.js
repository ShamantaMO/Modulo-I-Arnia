const io = require('../io/io')

let n = []

for(let i = 0; i < 10; i++){
    io.write('Informe o numero')
    let numero = io.readInt()
    n.push(numero)
}
for(i = 0; i < n.length; i++){
    let par = n[i] % 2 === 0
    if(par){
        io.write(`O numero ${n[i]} é Par`)
    } 
}
for(i = 0; i < n.length; i++){
    let impar = n[i] % 2 !== 0
    if(impar){
        io.write(`O numero ${n[i]} é Impar`)
    } 
}