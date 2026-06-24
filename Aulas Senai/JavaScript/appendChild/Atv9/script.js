/* O usuário deve poder remover os quadrados criados caso não sejam mais
necessários.
Requisitos
• Continuar a atividade anterior.
• Botão Remover Quadrado.
• Remover sempre o último quadrado criado.. */

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let list = document.getElementById("qua");
    let quadrado = document.createElement("div");
    quadrado.style.width = "50px";
    quadrado.style.height = "50px";
    quadrado.style.margin = "1rem"
    quadrado.style.backgroundColor = "green";

    list.appendChild(quadrado);
}

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click",remover)

function remover(){
    let list = document.getElementById("qua");
    let ultimoQ = list.lastElementChild

    list.removeChild(ultimoQ)
}



