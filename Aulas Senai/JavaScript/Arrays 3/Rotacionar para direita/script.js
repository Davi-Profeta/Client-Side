/* Ler 5 números inteiros e mover todos os elementos uma posição para a direita. O
último elemento deve passar para a primeira posição. */
let num
let vetor = []

for(let i=0; i<5 ; i++){
    num = Number(window.prompt(`Digite o número ${i+1}`))
    vetor.push(num)
}

window.alert(vetor)

let ultimoN = vetor.pop()
vetor.unshift(ultimoN)

window.alert(`Vetor atualizado ${vetor}`)
