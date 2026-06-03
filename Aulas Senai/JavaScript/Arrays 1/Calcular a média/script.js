// Ler 5 números reais, calcular a média e exibir a média final.
let num = []
let total = 0

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um número"))
    total = total + num[i]
}
let media = total / 5

window.alert(`Sua média é ${media}`)
