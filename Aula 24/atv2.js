const io = require('../io/io')

io.write("Informe a idade do nadador:")
const idadeNadador = io.readInt()

function Nadador(idade) {
    if (idade >= 5 && idade <= 7) {
        return "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        return "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        return "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        return "Juvenil B";
    } else {
        return "Adulto";
    }
}


let categoria = Nadador(idadeNadador);
io.write(`O nadador de ${idadeNadador} anos está na categoria:${categoria}`);