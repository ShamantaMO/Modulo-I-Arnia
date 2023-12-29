const io = require(/io/io)


function pNumeros(array) {
    const numerosImpares = array.filter(numero => numero % 2 !== 0);
 
    const somaDosNumeros = numerosImpares.reduce((acumulador, numero) => acumulador + numero, 0);
 
    for (let i = 0; i < somaDosNumeros; i++) {
         console.log("Javascript é muito bom");
    }
 }
 const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 pNumeros(arrayDeNumeros);