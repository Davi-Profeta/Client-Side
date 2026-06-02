/* Escreva um programa que peça ao usuário para digitar vários números. O programa deve somar 
todos os números digitados e parar quando o número 0 for digitado. Ao final, exiba o valor total da soma. */
let num = Number(window.prompt("Digite um número (0 acaba o programa)"))
let total = 0

while(num != 0){
    total = num + total

    num = Number(window.prompt("Digite outro número (0 acaba o programa)"))
}

window.alert("O valor total da soma é: "+total)