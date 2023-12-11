const io = require('../io/io')

let numero = 0

while(numero < 100){
    numero += 2
    io.write(numero)
}