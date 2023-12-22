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

const alterarParagrafoDivs = () => {
    const paragrafo = document.getElementById('firt')
    paragrafo.innerHTML = `
    <div>`
}