const io = require('../io/io')

function idadeDias() {
    io.write("Informe a quantidade de anos:")
    const anos = io.readInt()
    io.write("Informe a quantidade de meses:")
    const meses = io.readInt()
    io.write("Informe a quantidade de dias:")
    const dias = io.readInt()

    const diasAno = 365;
    const diasMes = 30; 
    
    const idadeDias = (anos * diasAno) + (meses * diasMes) + dias;
    
    return idadeDias;
}


const idadeDiasResultado = idadeDias();
io.write(`A idade em dias é: ${idadeDiasResultado} dias.`);