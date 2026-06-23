        const personagem = document.getElementById("personagem");
        const botaoAtivar = document.getElementById("botaoAtivar");
        const botaoRemover = document.getElementById("botaoRemover");

        const velocidade = 10;

        function moverPersonagem(evento) {
            let posicaoTopo = personagem.offsetTop;
            let posicaoEsquerda = personagem.offsetLeft;

            if (evento.key === "ArrowUp") {
                posicaoTopo -= velocidade;
            } else if (evento.key === "ArrowDown") {
                posicaoTopo += velocidade;
            } else if (evento.key === "ArrowLeft") {
                posicaoEsquerda -= velocidade;
            } else if (evento.key === "ArrowRight") {
                posicaoEsquerda += velocidade;
            }

            personagem.style.top = posicaoTopo + "px";
            personagem.style.left = posicaoEsquerda + "px";
        }

        botaoAtivar.addEventListener("click", function () {
            document.addEventListener("keydown", moverPersonagem);
        });

        botaoRemover.addEventListener("click", function () {
            document.removeEventListener("keydown", moverPersonagem);
        });