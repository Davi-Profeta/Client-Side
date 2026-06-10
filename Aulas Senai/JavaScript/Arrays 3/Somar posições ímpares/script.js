/* Ler 5 números inteiros e calcular a soma dos elementos que estão nas posições
ímpares do vetor. */
let num
let vetor = []
let impar = 0

for(let i=0; i<5 ; i++){
    num = Number(window.prompt(`Digite o número ${i+1}`))
    vetor.push(num)

    if(i % 2 == 1){
        impar = impar + vetor[i]
    }
}

window.alert(`A soma das posições ímpares deu ${impar}`)