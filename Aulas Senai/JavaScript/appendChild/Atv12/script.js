/* Desenvolva um sistema simples de gerenciamento de tarefas. O usuário poderá
adicionar tarefas que precisam ser realizadas durante o dia.
Requisitos
• Campo de texto.
• Botão Adicionar Tarefa.
• Cada tarefa deve aparecer em uma lista.
• Utilizar appendChild(). */

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let input = document.getElementById("name").value
    let list = document.getElementById("visor");
    let li = document.createElement("li");

    li.innerText = input
    list.appendChild(li);
}




