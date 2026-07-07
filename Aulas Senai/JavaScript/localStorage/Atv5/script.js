const btn = document.getElementById("btn");
let contador = Number(localStorage.getItem("Números"))
let text = document.getElementById("text");
btn.addEventListener("click", adicionar);

function adicionar(){
    contador ++;
    localStorage.setItem("Números",contador);
    text = document.getElementById("text");
    text.innerText = "Você clicou " + contador + " vezes o botão"
}

window.onload = function(){
    
    text.innerText = "Você clicou " + contador + " vezes o botão"
  
}