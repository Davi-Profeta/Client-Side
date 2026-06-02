/* Crie um programa que calcule o fatorial de um número 
digitado pelo usuário, usando a estrutura while.
(Ex: fatorial de 5 é 5 × 4 × 3 × 2 × 1 = 120) */
let num = Number(window.prompt("Digite número para fatorial"))
let contador = 1
let total = 1

while(contador <= num){
    total = total * contador
    contador++
}

window.alert(`O fatorial de ${num} é ${total}`)