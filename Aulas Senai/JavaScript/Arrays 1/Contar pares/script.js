// Ler 5 números inteiros e contar quantos são pares. Mostrar a quantidade.
let num = []
let pares = 0

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um número"))
    if(num[i] % 2 == 0){
        pares++
    }
}

window.alert(`São ${pares} números pares`)