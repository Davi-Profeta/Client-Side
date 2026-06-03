// Ler 5 números inteiros e mostrar qual foi o maior número digitado.
let num = []
let maior = 0

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um número"))

    if(num[i] > maior){
        maior = num[i]
    }

}

window.alert(`O maior número foi o ${maior}`)