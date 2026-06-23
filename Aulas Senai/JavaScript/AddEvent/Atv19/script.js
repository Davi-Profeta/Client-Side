const btnReduzir = document.getElementById('btnReduzir');
        const contadorDiv = document.getElementById('contador');
        const mensagemDiv = document.getElementById('mensagem');
        let numero = 20;

        function regredirContador() {
            numero--;
            contadorDiv.textContent = numero;
            if (numero > 0) {
                console.log(`Contagem em: ${numero}`);
            } else {
                mensagemDiv.textContent = "Fim da Contagem";
                btnReduzir.removeEventListener('click', regredirContador);
                btnReduzir.disabled = true;
            }
        }

        btnReduzir.addEventListener('click', regredirContador);