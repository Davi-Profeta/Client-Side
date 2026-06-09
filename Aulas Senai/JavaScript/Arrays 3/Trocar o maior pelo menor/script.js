/* Ler 5 números inteiros, localizar o maior e o menor valor e trocar suas posições no
vetor. Mostrar o vetor atualizado. */
let num = []

num[0] = Number(window.prompt("Digite o numero 1"))

let maior = num[0]
let menor = num[0]

for(let i=1; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o númemro ${i+1}`))

    if(num[i] > maior){
        maior = num[i]
    }
    if(num[i] < menor){
        menor = num[i]
    }
}
window.alert(num)
window.alert(`Maior número é ${maior}
Menor número é ${menor}`)

let posMa = num.indexOf(maior)
let vazio = num[posMa]

for(let i=0 ; i<5 ; i++){
    if(num[i] == maior){
        num[i] = menor
    }
    else if(num[i] == menor){
        num[i] = vazio
    }
}


window.alert(`O vetor trocado ficou assim ${num}`)