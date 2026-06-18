const titulo = document.getElementById("titulo");
    const botaoDestacar = document.getElementById("botaoDestacar");

    function destacarTitulo() {
      titulo.style.color = "white";
      titulo.style.backgroundColor = "blue";
    }

    botaoDestacar.addEventListener("click", destacarTitulo);