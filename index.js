
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({
        nome: "Renato Tavares", // 
        github: "https://github.com/rtdev-spec", // 
        linkedin: "https://www.linkedin.com/in/renato-tavares-marques-75146020b", // 
        mensagem: "Olá! Bem-vindo à minha API de apresentação no GitHub!"
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
