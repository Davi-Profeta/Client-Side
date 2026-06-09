/* Ler 5 números inteiros e calcular a soma apenas dos números pares armazenados no
vetor. */
let num = []
total = 0

for(let i=0; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o número ${i+1}`))

    if(num[i] % 2 == 0){
        total = total + num[i]
    }
}
window.alert(`A soma dos pares deu ${total}`)