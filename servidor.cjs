const http = require('http');
const express = require('express');
const { addListener } = require('process');
const app = express();


const servidorHttp = http.createServer(app);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('conectado');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
});

app.use(express.static('public'));

const ipv4 = '192.168.15.77'

servidorHttp.listen(1000, ipv4, () => {
    console.log(`Endereço do servidor: ${ipv4}:1000/login.html`)
});