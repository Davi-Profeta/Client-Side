// Ler 5 números inteiros e verificar se algum valor aparece mais de uma vez no vetor.
let num = []
let repetido = false

for(let i=0; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o número ${i+1}`))
}

for(let i=0; i<num.length ; i++){
    
    for(let j=i+1; j<num.length ; j++){
        if(num[i] == num[j]){
            repetido = true
            break
        }
    }
}

window.alert(`${repetido}`)