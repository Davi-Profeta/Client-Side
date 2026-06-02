/* Peça ao usuário que digite um número entre 1 e 10. 
Enquanto ele digitar fora desse intervalo, repita a solicitação. */
let num;
do{
    num = Number(window.prompt("Número de 1 a 10 "))
} while (num > 10 || num < 1)