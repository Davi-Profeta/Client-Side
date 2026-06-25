/* Crie um sistema que exiba frases motivacionais diferentes sempre que o usuário
clicar em um botão.
Requisitos
Criar um array com frases:
let frases = [
"Você consegue!",
"Nunca desista!",
"Continue estudando!",
"Seu esforço vale a pena!"
• Botão Nova Frase.
• Exibir uma frase por clique.
• Criar os elementos dinamicamente. */

let frases = ["Você consegue!","Nunca desista!","Continue Estuando!","Seu esforço vale a pena!"]
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",criou); 

function criou(){
    let list = document.getElementById("visor");
    let coah = document.createElement("div");
    let aleatorio = frases[Math.floor(Math.random() * frases.length)]
    coah.innerText = aleatorio
    list.appendChild(coah);
}




