/* A lista de compras precisa permitir que o usuário remova produtos inseridos por
engano.
Requisitos
• Continuar a atividade anterior.
• Criar um botão Remover Último Produto.
• O último item da lista deve ser removido utilizando removeChild(). */

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let product = document.getElementById("produto").value
    let list = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerText = product;

    list.appendChild(li);
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",remover)

function remover(){
    let list = document.getElementById("lista");
    let li = list.lastElementChild

    list.removeChild(li);
}

