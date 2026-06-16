let event1 = document.getElementById("btn1")
event1.addEventListener("click",AN)

let event2 = document.getElementById("btn2")
event2.addEventListener("click",MN)

let event3 = document.getElementById("btn3")
event3.addEventListener("click",CN)

let nomes = []
let contador = 0

function AN(){
    let nome = window.prompt("Digite um nome")
    nomes.push(nome)
    contador ++
}

function MN(){
    window.alert(nomes)
}

function CN(){
    window.alert(`São ${contador} nomes cadastrados`)
}