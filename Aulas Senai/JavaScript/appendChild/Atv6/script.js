/* Uma escola deseja cadastrar alunos em uma lista. Sempre que um nome for
informado, ele deverá aparecer na tela.
Requisitos
• Campo para digitar o nome.
• Botão Cadastrar Aluno.
• Exibir os nomes em uma lista.
• Utilizar appendChild(). */

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let product = document.getElementById("produto").value
    let list = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerText = product;

    list.appendChild(li);
}



