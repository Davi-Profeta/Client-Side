/* Escreva um programa que peça ao usuário para digitar um número positivo. 
Enquanto ele digitar um número negativo, o programa deve continuar pedindo um novo valor. */
let neg = 0
let num
do{
    num = Number(window.prompt("Um número positivo"))

} while(num > neg)