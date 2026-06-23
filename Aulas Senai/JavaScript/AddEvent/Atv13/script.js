const campoTexto = document.getElementById("campoTexto");
const visualizacao = document.getElementById("visualizacao");
const botaoAtivar = document.getElementById("botaoAtivar");
const botaoRemover = document.getElementById("botaoRemover");

function atualizarVisualizacao() {
    visualizacao.innerText = campoTexto.value;
}

botaoAtivar.addEventListener("click", function () {
    campoTexto.addEventListener("keyup", atualizarVisualizacao);
});

botaoRemover.addEventListener("click", function () {
    campoTexto.removeEventListener("keyup", atualizarVisualizacao);
});