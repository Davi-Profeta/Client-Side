/* Ler 5 números inteiros e calcular o produto (multiplicação) de todos eles. Mostrar o
resultado. */
let num1 = []
let mult = 1

for(let i=0; i<5 ; i++){
    num1[i] = Number(window.prompt("Digite um número"))
    mult = mult * num1[i]
}

window.alert(mult)