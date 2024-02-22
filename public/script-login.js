const button = document.getElementById('button')

const ipv4 = '192.168.15.95'

function direcionar() {
    window.location.href = `http://${ipv4}:1000/index.html`;
}

function salvarConteudo() {
    const usuario = document.getElementById('usuario').value;
    if (usuario === "") {
        alert("Digite um nome de usuário");
    }
    else {
        localStorage.setItem("Usuario", usuario);
        direcionar();
    }
}

button.addEventListener("click", salvarConteudo);

