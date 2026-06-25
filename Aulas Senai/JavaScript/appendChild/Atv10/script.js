/* Uma página de entretenimento deseja criar um painel de emojis. Cada clique deverá
adicionar um novo emoji na tela.
Requisitos
• Botão .
• Criar um <span>.
• Inserir o emoji dentro do span.
• Utilizar appendChild(). */

const botao = document.getElementById('btnAdicionar');
const painel = document.getElementById('painel');

const listaEmojis = ['😀', '🚀', '🌟', '🍕', '🎉', '😎', '🐱', '🔥', '💡'];

botao.addEventListener('click', function() {
    const novoSpan = document.createElement('span');
                    
    const emojiAleatorio = listaEmojis[Math.floor(Math.random() * listaEmojis.length)];

    novoSpan.textContent = emojiAleatorio;
    novoSpan.classList.add('emoji-span'); 

    painel.appendChild(novoSpan);
});


