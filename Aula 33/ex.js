const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault() 

    const codigo = document.querySelector("#codigo").value
    const nome = document.querySelector("#nome").value
    const preco = document.querySelector("#preco").value
    const quantidade = document.querySelector('#quantidade').value
    const categoria = document.querySelector('.campo').value
    const produto = preco * quantidade
    document.querySelector('.produto').innerHTML = 
        `
         <h2 class='titulo-resultado'>#${codigo} - ${nome}</h2>
         <div class='div-pai'>
         <div class='cate'><div>Categoria</div> <div> ${categoria}</div></div>
         <div class='cate'><div>Preço</div> <div>${preco}</div></div>
         <div class='cate'><div>Quantidade</div>  <div>${quantidade}</div></div>
         <h3 class='resultado-final'>R$ ${produto}</h3>
         </div>
         `
})