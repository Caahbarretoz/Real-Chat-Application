const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto')
const chat = document.getElementById('mensagens')
const nomeDoUsuario = localStorage.getItem("Usuario");


const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== "") {
        const data = `${nomeDoUsuario}: ${caixaMensagem.value}`;
        socket.emit('nova mensagem', data);
        caixaMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem'); 
    chat.appendChild(elementoMensagem);
})

