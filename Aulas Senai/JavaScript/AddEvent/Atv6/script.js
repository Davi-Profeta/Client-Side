let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("bloco")

btn1.addEventListener("click",ativar)
function ativar(){
    p.style.backgroundColor = "blue"
}

btn2.addEventListener("click",remover)
function remover(){
    btn1.removeEventListener("click", ativar);
    p.style.backgroundColor = ""
}