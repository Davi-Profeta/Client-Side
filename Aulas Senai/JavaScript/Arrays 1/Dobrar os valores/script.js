// Ler 5 números inteiros, multiplicar cada um por 2 e exibir os resultados.
let num = []
let mult = []

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um números"))
    mult[i] = num[i] * 2
}

window.alert(mult)