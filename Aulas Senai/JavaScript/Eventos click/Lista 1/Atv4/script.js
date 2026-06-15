let evento = document.getElementById("botao")
evento.addEventListener("mouseout",out)

let evento1 = document.getElementById("botao")
evento1.addEventListener("mouseenter",over)

let para = document.getElementById("text")

function out(){
    para.innerText = "Fiquei Triste"
}

function over(){
    para.innerText = "Fiquei Feliz"
}