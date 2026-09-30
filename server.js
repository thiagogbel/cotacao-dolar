// Importar o módulo express
const express = require('express')

// Criar a instância do express
const app = express()

// Servir os arquivos estáticos da pasta public (HTML, CSS e JS)
app.use(express.static('public'))

// Porta - no Render ele usa a variável de ambiente PORT
const porta = process.env.PORT || 3000

// Iniciar o servidor
app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta)
})
