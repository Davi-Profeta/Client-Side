/*Faça um programa que leia números do usuário até que ele digite 0. 
Para cada número positivo digitado, o programa deve contar. 
No final, exiba quantos números positivos foram digitados. */
let num = Number(window.prompt("Digite um numero"))
let contador = 0
while(num > 0){
    contador = contador + 1
    num = Number(window.prompt("Digite outro numero"))
}
window.alert(`${contador} numeros positivos foram digitados`)