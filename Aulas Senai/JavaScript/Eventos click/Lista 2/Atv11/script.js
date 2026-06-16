let event1 = document.getElementById("btn1")
event1.addEventListener("click", B1)

let event2 = document.getElementById("btn2")
event2.addEventListener("dblclick", B2) 

let event3 = document.getElementById("btn3")
event3.addEventListener("mouseenter", B3) 

let event4 = document.getElementById("btn4")
event4.addEventListener("mouseleave", B4) 

let event5 = document.getElementById("btn5")
event5.addEventListener("keydown", B5) 

function B1() {
    window.alert("Botão 1: Você ativou o evento de Clique Simples!")
}

function B2() {
    window.alert("Botão 2: Você ativou o evento de Clique Duplo!")
}

function B3() {
    window.alert("Botão 3: Você passou o mouse por cima de mim!")
}

function B4() {
    window.alert("Botão 4: Você tirou o mouse de cima de mim!")
}

function B5() {
    window.alert("Botão 5: Você pressionou uma tecla com o botão focado!")
}