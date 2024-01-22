const getPosts = async () => {
    const requisicao = await fetch('http://localhost:3000/posts')
    const posts = await requisicao.json()
    console.log(posts)

    return posts
}
const mostrarPosts = async () => {
    const postsDiv = document.querySelector('.posts')

    posts.array.forEach(post => {
        postsDiv.innerHTML = postsDiv.innerHTML + `<div>${post.id} - ${post.titulo}</div>`
        
    });
}
const carregarDados = async () => {
    const postagens =await getPosts()
    mostrarPosts(postagens)

}

carregarDados()