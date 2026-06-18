const circulo = document.getElementById("circulo");
    const botaoEsconder = document.getElementById("botaoEsconder");

    function esconderCirculo() {
      circulo.style.display = "none";
    }

    botaoEsconder.addEventListener("click", esconderCirculo);