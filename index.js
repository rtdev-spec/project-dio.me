// Importando o Express
const express = require('express');
const app = express();

// Definindo a porta
const PORT = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
    res.json({
        nome: "Seu Nome", // Substitua pelo seu nome
        github: "https://github.com/seu-usuario", // Seu perfil no GitHub
        linkedin: "https://www.linkedin.com/in/seu-perfil", // Opcional
        mensagem: "Olá! Bem-vindo à minha API de apresentação no GitHub!"
    });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
