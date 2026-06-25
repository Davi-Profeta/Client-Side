/* Crie um sistema que registre números sequenciais na tela sempre que um botão for
pressionado.
Requisitos
• Botão Adicionar Número.
• Exibir:
1
2
3
4
5
...
• Cada número deve estar dentro de um elemento criado dinamicamente. */
let contador = 0
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let list = document.getElementById("visor");
    let num = document.createElement("li");
    contador++
    num.innerText = contador

    list.appendChild(num);
}





