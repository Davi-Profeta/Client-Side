let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("quadrado")

btn1.addEventListener("click",ativar)
function ativar(){
    p.style.backgroundColor = "green"
}

btn2.addEventListener("click",remover)
function remover(){
    p.removeEventListener("click", ativar);
    p.style.backgroundColor = "";
}