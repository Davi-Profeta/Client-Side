 const caixaAlternar = document.getElementById("caixaAlternar");
    const botaoAlternarCor = document.getElementById("botaoAlternarCor");

    function alternarCor() {
      if (caixaAlternar.style.backgroundColor === "red") {
        caixaAlternar.style.backgroundColor = "green";
      } else {
        caixaAlternar.style.backgroundColor = "red";
      }
    }

    botaoAlternarCor.addEventListener("click", alternarCor);