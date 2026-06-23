let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("bloco")
let width = 50
let height = 50

btn1.addEventListener("click",function(){
    btn1.innerText = "Aumentar tamanho"
    btn1.addEventListener("click",ativar)
})
function ativar(){
    width = width + 20
    height = height + 20
    p.style.width = width + "px"
    p.style.height = height + "px"
}

btn2.addEventListener("click",remover)
function remover(){
    btn1.removeEventListener("click", ativar);
    btn1.innerText = "Ativar Evento"
}