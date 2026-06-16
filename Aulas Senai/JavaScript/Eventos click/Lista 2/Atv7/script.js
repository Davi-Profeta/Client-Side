let event1 = document.getElementById("btn1")
event1.addEventListener("click",AN)

let event2 = document.getElementById("btn2")
event2.addEventListener("click",MV)

let event3 = document.getElementById("btn3")
event3.addEventListener("click",MS)

let numero = []
let soma = 0

function AN(){
    let num = Number(window.prompt("Digite um número"))
    numero.push(num)
    soma = soma + num
}

function MV(){
    window.alert(numero)
}

function MS(){
    window.alert(`A soma dos números deu ${contador}`)
}