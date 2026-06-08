/* Ler 5 números inteiros e substituir os valores negativos por zero. Mostrar o vetor
resultante. */
let num1 = []

for(let i=0; i<5 ; i++){
    num1[i] = Number(window.prompt(`Digite um número`))
    if(num1[i] < 0){
        num1[i] = 0
    }
}

window.alert(num1)
