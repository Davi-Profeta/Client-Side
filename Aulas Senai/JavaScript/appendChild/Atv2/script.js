/* Agora a empresa deseja saber quantas mensagens foram exibidas. Cada nova
mensagem deve possuir uma numeração automática.
Requisitos
• Criar um botão chamado Adicionar.
• Utilizar uma variável contador.
• Exibir:
Mensagem 1
Mensagem 2
Mensagem 3
...
• Cada mensagem deve ser criada dinamicamente utilizando appendChild(). */

let btn = document.getElementById("btn");
btn.addEventListener("click",criou); 
let contador = 0;

function criou(){
    let title = document.getElementById("title");
    let p = document.createElement("p");
    contador ++;
    p.innerText = `Bem-Vindo ${contador}`;

    title.appendChild(p);
}