// Ler 5 números inteiros e mostrar qual é o segundo maior número armazenado no vetor.
let vetor = []
let num

for(let i=0; i<5 ; i++){
    num = Number(window.prompt(`Digite o número ${i+1}`))
    vetor.push(num)
}

vetor.sort((a,b) => a-b)

let segMaior = vetor[3]
window.alert(` O segundo maior número é ${segMaior}`)