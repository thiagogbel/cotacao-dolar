function buscarDolar() {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then(resposta => {
            return resposta.json()
        })
        .then(economia => {
            console.log(economia.USDBRL.bid)
            document.getElementById('valorDolar').innerHTML = 'R$ ' + economia.USDBRL.bid
        })
        .catch(erro => {
            document.getElementById('valorDolar').innerHTML = 'Erro ao carregar cotação'
            console.log(erro)
        })
}

// Busca o valor assim que a página carrega
buscarDolar()

// Atualiza a cada 5 segundos
setInterval(buscarDolar, 5000)
