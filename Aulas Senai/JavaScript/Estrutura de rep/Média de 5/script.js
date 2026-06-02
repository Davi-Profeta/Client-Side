/* Crie um programa que leia 5 notas de um aluno usando a estrutura for, 
calcule a média e mostre o resultado.*/
let total = 0

for(let i=1 ; i<=5; i++){
    let notas = Number(window.prompt(`Qual sua nota ${i}:`))
    total = total + notas
}
let media = total / 5
window.alert(`Sua média é ${media.toFixed(2)}`)