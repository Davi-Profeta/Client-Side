
let event1 = document.getElementById("btn1")
event1.addEventListener("click", BV)

let event2 = document.getElementById("btn2")
event2.addEventListener("click", BA)

let event3 = document.getElementById("btn3")
event3.addEventListener("click", BG)

// Funções de ação
function BV() {
    window.alert("Você perdeu 10 pontos!")
}

function BA() {
    window.alert("Você ganhou 50 pontos!")
}

function BG() {
    window.alert("Bônus surpresa!")
}