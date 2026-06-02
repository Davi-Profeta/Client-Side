/* Faça um programa que continue pedindo números ao 
usuário até que ele digite um número ímpar. */
let num;
do{
    num = Number(window.prompt("Digite um número (vai parar só com ímpares)"))
} while (num % 2 == 0)