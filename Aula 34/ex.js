const dados = fetch('https://jsonplaceholder.typicode.com/users')
console.log(dados)

dados.then((respostaHttp) => {
    console.log(respostaHttp)
    return respostaHttp.json()
}).then((resposta) => {
    console.log(resposta)
    const lista = document.querySelector('.lista')

    resposta.forEach((usuario) => {
        lista.innerHTML = lista.innerHTML +
        `
            <li>${usuario.id} - ${usuario.name}</li>
        `
    })
})