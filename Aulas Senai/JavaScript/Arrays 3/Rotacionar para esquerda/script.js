/* Ler 5 números inteiros e mover todos os elementos uma posição para a esquerda. O
primeiro elemento deve passar para a última posição. */
let num
let vetor = []

for(let i=0; i<5 ; i++){
    num = Number(window.prompt(`Digite o número ${i+1}`))
    vetor.push(num)
}

window.alert(vetor)

let numP = vetor.shift()
vetor.push(numP)

window.alert(`Vetor atualizado ${vetor}`)
