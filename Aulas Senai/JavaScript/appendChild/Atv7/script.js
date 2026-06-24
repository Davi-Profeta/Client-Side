/* A secretaria da escola percebeu que alguns nomes podem ser cadastrados
incorretamente. Por isso, será necessário remover o último aluno cadastrado.
Requisitos
• Continuar a atividade anterior.
• Criar botão Excluir Último Aluno.
• Utilizar removeChild().*/

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let product = document.getElementById("produto").value
    let list = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerText = product;

    list.appendChild(li);
}

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click",remover)

function remover(){
    let list = document.getElementById("lista");
    let li = list.lastElementChild
    list.removeChild(li)
}
