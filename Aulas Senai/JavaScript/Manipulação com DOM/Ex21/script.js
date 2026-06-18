const caixaVerde = document.getElementById("caixaVerde");
    const botaoMostrarMensagem = document.getElementById("botaoMostrarMensagem");

    function mostrarMensagem() {
      caixaVerde.innerText = "Cor alterada com sucesso!";
    }

    botaoMostrarMensagem.addEventListener("click", mostrarMensagem);