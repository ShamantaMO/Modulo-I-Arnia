const io = require('../io/io')

class Celular {
    constructor(modelo, marca, valor) {
      this.modelo = modelo;
      this.marca = marca;
      this.valor = valor;
    }

    informarDados() {
      io.write(`Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: ${this.valor}`);
    }
  }

  const celulares = [
    { modelo: "iPhone 13", marca: "Apple", valor: 6999.99 },
    { modelo: "Galaxy S21", marca: "Samsung", valor: 4999.99 },
    { modelo: "Pixel 6", marca: "Google", valor: 5999.99 },
    { modelo: "OnePlus 9", marca: "OnePlus", valor: 5499.99 },
    { modelo: "Xperia 1 III", marca: "Sony", valor: 6499.99 }
  ];

  for (let i = 0; i < smartphones.length; i++) {
    const { modelo, marca, valor } = celulares[i];
    const celular = new Celular(modelo, marca, valor);
    celular.informarDados();
  }