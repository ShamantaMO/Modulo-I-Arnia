const io = require('../io/io')

function filtrarPalavras(palavras, verificarTamanho) {
    return palavras.filter(verificarTamanho);
    
}

function verificarTamanho(palavra) {
    return palavra.length > 5;
}

const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi',
'livro']

const resultado = filtrarPalavras(palavras, verificarTamanho);
console.log(resultado)