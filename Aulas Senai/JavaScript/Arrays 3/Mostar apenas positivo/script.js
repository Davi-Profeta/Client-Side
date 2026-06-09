//Ler 5 números inteiros e exibir apenas os números positivos armazenados no vetor.
let positivos = []

for(let i=0; i<5 ; i++){
    let num = Number(window.prompt("Digite o número "+ (i+1) ))

    if(num >= 0){
        positivos.push(num)
    }
}

window.alert(`Esses foram seus positivos ${positivos}`)
