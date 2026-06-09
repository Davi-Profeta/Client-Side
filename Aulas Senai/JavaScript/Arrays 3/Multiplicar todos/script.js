/* Ler 5 números inteiros e, em seguida, ler um número multiplicador. Multiplicar todos os
elementos do vetor por esse valor e mostrar o resultado. */
let num = []
let total = []

for(let i=0; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o número ${i+1}`))
}

let mult = Number(window.prompt("Qual número você quer multiplicar: "))

for(let i=0; i<5 ; i++){
    total[i] = num[i] * mult 
}

window.alert(`Seu vetor multiplicado fica ${total}`)