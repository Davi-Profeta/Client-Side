let evento1 = document.getElementById("btn")
let evento2 = document.getElementById("btn")
let evento3 = document.getElementById("btn")
evento1.addEventListener("mouseenter",passar)
evento2.addEventListener("mouseleave",sair)
evento3.addEventListener("click",clicou)

let texto = document.getElementById("text")

function passar(){
    texto.innerText = "O mouse chegou"
}

function sair(){
    texto.innerText = "O mouse foi embora"
}

function clicou(){
    texto.innerText = "Você clicou aqui"
}   