/* Ler 5 números inteiros e criar um segundo vetor contendo o quadrado de cada
elemento do primeiro vetor. Mostrar os dois vetores. */
let num = []

for(let i=0; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o número ${i + 1}`))
}

let quadrado

for(let i=0; i<5 ; i++){
    quadrado = num[i]
    window.alert(`O quadrado do ${i+1} é ${quadrado * num[i]}`)
}