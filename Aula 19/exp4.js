const io = require('../io/io')

io.write("Informe a sua idade")
const idade = io.readInt()

if(idade < 12){
    io.write("Infancia")    
}else if (idade >= 12 && idade < 18) {
    io.write('Adolecencia')
 } else if(idade >= 18 && idade < 60) {
 io.write('Adulto')
} else {
    io.write('Idoso')
}