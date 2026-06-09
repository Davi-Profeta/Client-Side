/* Ler 5 números inteiros e mostrar a posição onde se encontra o maior elemento do
vetor. */
let num = []

num[0] = Number(window.prompt(`Digite o número 1`))
let maior = num[0]

for(let i=1; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o número ${i+1}`))

    if(num[i] > maior){
        maior = num[i]
    }
}
let posM = num.indexOf(maior)
window.alert(`O maior está na posição ${posM} do vetor`)