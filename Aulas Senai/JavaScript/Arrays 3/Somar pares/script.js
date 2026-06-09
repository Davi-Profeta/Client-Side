/* Ler 5 números inteiros e calcular a soma dos elementos que estão nas posições pares
do vetor. */
let vetor = []
let pares = 0

for(let i=0; i<5 ; i++){
    vetor[i] = Number(window.prompt(`Digite o número  ${i+1}`))

    if(i % 2 === 0){
        pares = pares + vetor[i]
    }
}
window.alert(pares)