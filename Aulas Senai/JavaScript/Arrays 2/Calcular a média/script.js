/* Ler 5 números reais, calcular a média e mostrar apenas os números que estão acima
da média. */
let num = []
let soma = 0

for(let i=0; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um número"))
    soma = soma + num[i]
}

let media = soma / 5

window.alert(`A média foi ${media}, esses são os númeoros acima da média:`)
for(let i=0; i<num.length ; i++){
    if(num[i] > media){
        window.alert(num[i])
    }
}