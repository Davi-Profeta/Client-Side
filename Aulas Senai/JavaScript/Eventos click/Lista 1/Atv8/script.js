let evento = document.getElementById("btn")
evento.addEventListener("mouseover", passou)

let evento1 = document.getElementById("btn")
evento1.addEventListener("click", clicou)

let para = document.getElementById("text")

function passou(){
    para.innerText = "Acha que tem coragem? Clica então!"
}

function clicou(){
    para.innerText = " Uau! Você tem coragem sim!"
}