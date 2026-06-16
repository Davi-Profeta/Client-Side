let event1 = document.getElementById("btn1")
event1.addEventListener("click",AN)

let event2 = document.getElementById("btn2")
event2.addEventListener("click",MV)

let event3 = document.getElementById("btn3")
event3.addEventListener("click",MS)

let numero = []
let media = 0
let soma = 0
let maior = 0

function AN(){
    let num = Number(window.prompt("Digite um número"))
    numero.push(num)

    if(num > maior){
        maior = num
    }

    soma = soma + num
}

function MV(){
    media = soma / numero.length
    window.alert(`Sua média foi : ${media}`)
}

function MS(){
    window.alert(`Sua maior nota foi: ${maior}`)
}