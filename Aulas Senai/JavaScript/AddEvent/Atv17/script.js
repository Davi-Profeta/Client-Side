 const btnGerar = document.getElementById('btnGerar');
        const btnDesativar = document.getElementById('btnDesativar');
        const numeroSorteadoDiv = document.getElementById('numeroSorteado');
        const mensagemDiv = document.getElementById('mensagem');

        function gerenciarClique() {
            const numeroAleatorio = Math.floor(Math.random() * 20) + 1;
            numeroSorteadoDiv.textContent = numeroAleatorio;

            if (numeroAleatorio % 2 === 0) {
                mensagemDiv.textContent = "Número Aceito";
                mensagemDiv.className = "sucesso";
            } else {
                mensagemDiv.textContent = "Número Ignorado";
                mensagemDiv.className = "falha";
            }
        }

        function desativarEvento() {
            btnGerar.removeEventListener('click', gerenciarClique);
            mensagemDiv.textContent = "O gerador foi desativado.";
            mensagemDiv.className = "info";
            btnGerar.disabled = true;
            btnDesativar.disabled = true;
        }

        btnGerar.addEventListener('click', gerenciarClique);
        btnDesativar.addEventListener('click', desativarEvento);