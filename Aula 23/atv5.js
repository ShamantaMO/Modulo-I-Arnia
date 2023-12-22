const io = require('../io/io')

let soma = 0
let numeroDifZero = true 
let numeros = []


while(numeroDifZero){
    io.write('Informe um numero real:')
    let numero = io.readInt()
    if(numero === 0){
        numeroDifZero = false
    }else{
        numeros.push(numero) 
        soma = soma + numero
    }        
}

let media = soma / numeros.length
io.write(`A media dos numeros ${numeros} é ${media}`)

