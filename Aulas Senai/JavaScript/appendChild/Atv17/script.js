/* Crie um sistema capaz de registrar todas as vezes que um botão foi pressionado.
Requisitos
• Botão Clique Aqui.
• Cada clique deve gerar uma nova linha:
Você clicou no botão!
• Exibir em uma lista.*/
const botao = document.getElementById('botaoClique');
const lista = document.getElementById('listaDeCliques');

       
botao.addEventListener('click', function() {
            
const novoItem = document.createElement('li');
            
novoItem.textContent = 'Você clicou no botão!';
            
          
lista.appendChild(novoItem);
            
});





