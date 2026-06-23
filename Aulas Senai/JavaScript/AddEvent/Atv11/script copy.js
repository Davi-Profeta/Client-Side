let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("title")


btn1.addEventListener("click", function(){
    btn1.innerText = "Trocar de cor"
    btn1.addEventListener("click",ativar)
})
function ativar(){
    p.style.backgroundColor = "green"
}

btn2.addEventListener("click",remover)
function remover(){
    btn1.removeEventListener("click", ativar);
    btn1.innerText = "Ativar Evento"
}