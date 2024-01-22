const alertarInicio = () => {
    console.log('Bem vindo, alunos Arnia')
    window.alert('Bem Vindo!')
    
}
const alertaClique = () => {
    console.log('foi clicado')
}

const alterarParagrafo = () => {
    const paragrafo = document.getElementById(first)
    console.log(paragrafo)
    paragrafo.innerHTML = 'Teste'
}

document.getElementById("loadStylesButton").addEventListener("click", toggleStyles);

function toggleStyles() {
    const body = document.getElementById("body");
    const paragraphs = document.querySelectorAll("p");

    body.classList.toggle("dark-mode");
    
    paragraphs.forEach(paragraph => {
        paragraph.classList.toggle("dark-mode");
    });
}
