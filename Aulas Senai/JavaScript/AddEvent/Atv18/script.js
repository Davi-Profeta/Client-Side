const btnTomarDano = document.getElementById('btnTomarDano');
        const contadorVidasSpan = document.getElementById('contadorVidas');
        const mensagemDiv = document.getElementById('mensagem');
        let vidas = 5;
        function perderVida() {
            vidas--; 
            contadorVidasSpan.textContent = vidas;
            if (vidas > 0) {
                console.log(`Você ainda tem ${vidas} vidas.`);
            } else {
                mensagemDiv.textContent = "Game Over";
                btnTomarDano.removeEventListener('click', perderVida);
                btnTomarDano.disabled = true;
            }
        }

        btnTomarDano.addEventListener('click', perderVida);