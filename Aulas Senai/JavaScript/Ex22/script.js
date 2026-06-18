 const quadrado1 = document.getElementById("quadrado1");
    const quadrado2 = document.getElementById("quadrado2");
    const quadrado3 = document.getElementById("quadrado3");
    const quadrado4 = document.getElementById("quadrado4");
    const quadrado5 = document.getElementById("quadrado5");
    const botaoColorirTudo = document.getElementById("botaoColorirTudo");

    function colorirQuadrados() {
      quadrado1.style.backgroundColor = "red";
      quadrado2.style.backgroundColor = "orange";
      quadrado3.style.backgroundColor = "yellow";
      quadrado4.style.backgroundColor = "green";
      quadrado5.style.backgroundColor = "blue";
    }

    botaoColorirTudo.addEventListener("click", colorirQuadrados);