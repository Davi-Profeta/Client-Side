// Ler 5 números inteiros e informar quantos deles são ímpares.
let num = []
let contador = 0

for(let i=0; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um número"))
    if(num[i] % 2 == 1){
        contador++
    }
}

window.alert(`Você digitou ${contador} números ímpares`)