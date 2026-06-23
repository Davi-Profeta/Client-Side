let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("contador")
let contador = 0

btn1.addEventListener("click",ativar)
function ativar(){
    contador += 1
    p.innerText = contador
}

btn2.addEventListener("click",remover)
function remover(){
    p.removeEventListener("click", ativar);
    p.innerText = "0"
}