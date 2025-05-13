const express = require('express')
const app = express()

app.use(express.json())

app.post('/compra', (req, res) => {
    const nome = req.body.nome
    const preco = req.body.preco
    const quantidade = req.body.quantidade 

if (typeof(nome) != "string" || typeof(preco) != "number" || typeof(quantidade) != "number") {
    res.send('As informações estão erradas!')
} else {
    res.send('Produto: ' + nome + '\n Valor final: ' + preco * quantidade)
}

});

app.listen(3000, () => {
    console.log('Servidor rodando em http:/localhost:3000')
})