import express from 'express';

const app = express();

const port = 3000;

app.get('/', (_req, _res) => {
    _res.send("API de UTN Gestion de eventos academicos");
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`));