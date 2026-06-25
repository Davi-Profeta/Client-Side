/* Enunciado
Crie um sistema capaz de gerar novos botões dinamicamente. Cada clique no botão
principal deverá criar outro botão na tela.
Requisitos
• Botão principal chamado Criar Botão.
• Utilizar createElement().
• Utilizar appendChild().*/

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let list = document.getElementById("visor");
    let btn = document.createElement("button");
    btn.innerText = "Novo botão"

    list.appendChild(btn);
}





