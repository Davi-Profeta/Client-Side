/* Uma empresa de design deseja criar uma ferramenta para gerar elementos gráficos
simples. Cada clique deve criar um novo quadrado na tela.
Requisitos
• Botão Criar Quadrado.
• Criar uma <div> de 50px por 50px.
• Inserir a nova div em uma área específica.
• Utilizar appendChild(). */

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


