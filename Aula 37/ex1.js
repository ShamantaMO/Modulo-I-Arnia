const timestamp = (new Date()).getTime()
const publicKey = 'ffff5e0d7bfec90c3c62e0e18c9b83d2'
const privateKey = '7e6e6cf473f8db164ca4dc236377c590830bae7c'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const buscarPersonagens =  async() => {
const respostaHttp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

console.log(respostaHttp)
const resposta = await respostaHttp.json()
}

buscarPersonagens()