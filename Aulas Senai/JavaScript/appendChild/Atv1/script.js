/* Atividade 1 – Criando Mensagens na Tela
Enunciado
Uma empresa deseja exibir mensagens de boas-vindas para seus visitantes.
Sempre que o usuário clicar no botão "Adicionar Mensagem", uma nova mensagem
deverá ser criada automaticamente e exibida dentro de uma área da página.
Requisitos
• Criar uma <div> para armazenar as mensagens.
• Criar um botão chamado Adicionar Mensagem.
• Utilizar addEventListener().
• Cada clique deve criar um novo <p>.
• O texto do parágrafo deve ser:
Bem-vindo ao sistema!
• Utilizar appendChild() para inserir o parágrafo. */

let btn = document.getElementById("btn");
btn.addEventListener("click",criou)

function criou(){
    let title = document.getElementById("title");
    let p = document.createElement("p");
    p.innerText = "Bem vindos";

    title.appendChild(p);
}