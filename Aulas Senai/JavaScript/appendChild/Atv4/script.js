/* Você foi contratado para desenvolver uma pequena lista de compras digital. O
usuário deverá digitar o nome de um produto e adicioná-lo à lista.
Requisitos
• Campo de texto.
• Botão Adicionar Produto.
• Cada produto deve ser exibido em um <li>.
• Utilizar appendChild().
• Não utilizar innerHTML. */

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let product = document.getElementById("produto").value
    let list = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerText = product;

    list.appendChild(li);
}

