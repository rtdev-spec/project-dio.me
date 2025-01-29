<h1 align="center">
<img src="https://i0.wp.com/posgraduando.com/wp-content/uploads/2016/01/apresentacao-grafico-01.jpg?resize=1200%2C488&ssl=1" width="500" height="200">
<h1 align="center">
  <b>Renato Tavares</b>
  <br />
  <sub
    ><sup><b>Simple API Presentation</b></sup></sub
    />
  </a>
</h1>

<p align="center">
  Young man, seeking to improve his technological knowledge with the aim of leveraging my intellectual power, and playing a good role in a company, so that, finally, I have a monetary profitability, and also acquire a lot of experience in the programming area!
  <br />
</p>

<p align="center">
  I used CHATGPT to create a simple presentation API for myself, then handing this project over to dio.me, which is training countless developers in Brazil and abroad!
  Check out all the code used in node.js below, that is, java script on the backend side!
  <br />

```🌐

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
```

💥 Renato Tavares -
[Github](https://github.com/rtdev-spec)

