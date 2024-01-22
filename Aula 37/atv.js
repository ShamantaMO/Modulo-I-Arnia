const apikey = 'BhtsteGJLO2eO11sDOAxXB1d0J20Xhl2'
const urlCidade = 'http://dataservice.accuweather.com/locations/v1/search'
const urlClima = 'http://dataservice.accuweather.com/currentconditions/v1/'

async function buscarCidade(){
    const pesquisa = document.getElementById('pesquisa').value 

    const pesquisaCidade = await fetch(`${urlCidade}?q=${pesquisa}&apikey=${apikey}`)
    const cidade = await pesquisaCidade.json()

    const pesquisaClima = await fetch(`${urlClima}${cidade[0].Key}?apikey=${apikey}`)

    document.getElementById('local').innerHTML = cidade[0].LocalizedName
    document.getElementById('condicao').innerHTML = clima[0].WeatherText
    document.getElementById('temperatura').innerHTML = clima[0].Temperature.Metric.Value + '°C'
    document.getElementById('data').innerHTML = new Date(clima[0].LocalObservationDateTime).toLocaleDateString('pt-BR')
    document.getElementById('box')
    
}