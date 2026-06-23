const botao = document.getElementById('meuBotao');
        const mensagemDiv = document.getElementById('mensagem');

        let contador = 0;

        function contarCliques() {
            contador++; 
            botao.textContent = `Cliques: ${contador}`;

            if (contador < 10) {
                console.log(`Contagem atual: ${contador}`);
            } else {
                mensagemDiv.textContent = "Limite atingido.";
                botao.removeEventListener('click', contarCliques);
                botao.disabled = true; 
            }
        }

        botao.addEventListener('click', contarCliques);