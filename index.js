//Importo el módulo fs
const fs = require('fs');
//Importo el Contenedor
const Contenedor = require('./Contenedor.js');
//Importo Express
const express = require("express");

//Creo el objeto Contenedor
const contenedor = new Contenedor('./productos.txt');

const app = express();

app.get('/', (req,res) => {
    res.send('<h1 style="color:blue;">Bienvenido al Contenedor de Productos.</h1>');
});

app.get('/productos', async (req,res) => {
    const productos = await contenedor.getAll();
    res.send(productos);
});

app.get('/productoRandom', async (req,res) => {
    const productos = await contenedor.getAll();
    const numeroRand = Math.floor(Math.random * productos.length);
    res.send(productos[numeroRand]);
});

const PORT = process.env.PORT || 8080; //si la var port no esta definida en el environment va por default 8080
const server = app.listen(PORT, () => {
    console.log(
        `Servidor express escuchando en el puerto ${PORT}`
    );
});
server.on('error', err => console.log(`error: ${err}`));