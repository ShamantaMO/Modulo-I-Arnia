const mostrarPosts =  (resposta) => {
    const container = document.querySelector('.cabecalho')
    resposta.forEach((post)=>{

        container.innerHTML += `<div><img src = "${post.imagem}"></div>`
        container.innerHTML += `<div><h2>${post.titulo}"</h2></div>`
        container.innerHTML += `<div>${post.texto}</div>`
       
})
}

const carregarDados = async () => {

    const dados = await fetch('http://localhost:3000/posts')
    console.log(dados)
    const resposta = await dados.json()
    console.log(resposta)
    

   mostrarPosts(resposta)
}
carregarDados()