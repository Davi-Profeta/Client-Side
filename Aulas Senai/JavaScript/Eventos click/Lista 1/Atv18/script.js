let evento = document.getElementById("btn1")
evento.addEventListener("click", venceu)

let evento1 = document.getElementById("btn2")
evento1.addEventListener("dblclick", especial)

let evento2 = document.getElementById("btn3")
evento2.addEventListener("mouseover", campeao)

let para = document.getElementById("text")

function venceu(){
    para.innerText = "Botão 1 venceu a rodada!"
}

function especial(){
    para.innerText = "Botão 2 usou golpe especial!"
}

function campeao(){
    para.innerText = "Botão 3 é o campeão!"
}