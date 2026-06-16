// Seleção dos elementos HTML
let event1 = document.getElementById("btn1")
event1.addEventListener("click", IN)

let event2 = document.getElementById("btn2")
event2.addEventListener("click", MA)

let event3 = document.getElementById("btn3")
event3.addEventListener("click", ME)

let vetorNumeros = []
let maior = -Infinity
let menor = Infinity

function IN() {
    let num = Number(window.prompt("Digite um número:"))
    vetorNumeros.push(num)

    if (num > maior) {
        maior = num
    }

    if (num < menor) {
        menor = num
    }
}

function MA() {
    if (vetorNumeros.length === 0) {
        window.alert("Nenhum número foi inserido ainda!")
    } else {
        window.alert(`O maior número armazenado é: ${maior}`)
    }
}

function ME() {
    if (vetorNumeros.length === 0) {
        window.alert("Nenhum número foi inserido ainda!")
    } else {
        window.alert(`O menor número armazenado é: ${menor}`)
    }
}