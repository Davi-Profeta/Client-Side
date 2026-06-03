//Ler 5 números inteiros e calcular a soma de todos eles. Mostrar o resultado.
let num = []
let total = 0

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um número"))
    total = num[i] + total
}

window.alert(`A soma de seus números deu ${total}`)


