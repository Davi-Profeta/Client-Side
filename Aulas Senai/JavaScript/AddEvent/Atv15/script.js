const horaElemento = document.getElementById("hora");
const botaoMostrar = document.getElementById("botaoMostrar");
const botaoAtivar = document.getElementById("botaoAtivar");
const botaoDesativar = document.getElementById("botaoDesativar");

function mostrarHora() {
    const agora = new Date();
    horaElemento.innerText = agora.toLocaleTimeString();
}

botaoAtivar.addEventListener("click", function () {
    botaoMostrar.addEventListener("click", mostrarHora);
});

botaoDesativar.addEventListener("click", function () {
    botaoMostrar.removeEventListener("click", mostrarHora);
});