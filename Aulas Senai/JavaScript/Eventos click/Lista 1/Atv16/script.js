let evento = document.getElementById("btn")
evento.addEventListener("mouseover", provocou)

let evento1 = document.getElementById("btn")
evento1.addEventListener("click", respondeu)

let para = document.getElementById("text")

function provocou(){
    para.innerText = "Você tá mentindo a cara dura!"
}

function respondeu(){
    para.innerText = "Dessa vez acredito em você."
}