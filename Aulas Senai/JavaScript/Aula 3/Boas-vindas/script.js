/*Crie um programa que leia a idade de uma pessoa e imprima uma mensagem
de boas-vindas. Se a idade for maior ou igual a 18, imprima "Bem-vindo(a)",
caso contrário, imprima "Acesso negado".*/
let idade = Number(window.prompt("Qual sua idade"))
let acesso = idade >= 18 ? "Bem-vindo(a)" : "Acesso negado"

window.alert(acesso)