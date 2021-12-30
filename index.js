const express = require('express');
const app = express();

let data = new Date();

let hora = data.getHours();

let mensagemDoDia = require('./mensagemDoDia');

mensagemDoDia.length =

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});