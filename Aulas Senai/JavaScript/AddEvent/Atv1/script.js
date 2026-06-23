let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("text")

btn1.addEventListener("click",ativar)
function ativar(){
    text.innerText = "Ativou"
}
btn2.addEventListener("click",remover)
function remover(){
    text.removeEventListener("click", ativar);
    text.innerText = "";
    text.style.color = "";
}