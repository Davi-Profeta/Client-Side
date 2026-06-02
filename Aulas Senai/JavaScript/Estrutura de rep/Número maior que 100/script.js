/* Faça um programa que peça ao usuário para digitar 
um número maior que 100. Enquanto o número digitado for 
menor ou igual a 100, o programa deve continuar pedindo. 
Quando um número válido for digitado, exiba uma mensagem confirmando. */
let maior = 100
let num = 0

do{
    num = Number(window.prompt("Digite um número maior que 100"))
} while (maior >= num)