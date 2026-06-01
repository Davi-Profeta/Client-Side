/*Leia duas notas de um aluno, calcule a média e diga se está APROVADO,
REPROVADO, RECUPERAÇÃO...
Nota >= 6 Aprovado 
Nota = 5 Recuperação 
Nota < 5 Reprovado 
Obs: As verificações só poderão ser feitas caso o usuário digite um número
abaixo de 10*/
function mediaN(){
let nota1 = Number(window.prompt("Qual sua primeira nota (0 a 10)"))
if(nota1 > 10){
    window.alert("Verifique os dados");
    return;
}

let nota2 = Number(window.prompt("Qual sua segunda nota (0 a 10)"))
if(nota2 > 10){
    window.alert("Verifique os dados");
    return;
}
let media = (nota1 + nota2) / 2

if(media >= 6){
    window.alert(media + ", aprovado")
}
else if(media = 5){
    window.alert(media + ", recuperação")
}
else{
    window.alert(media + ", reprovado")
}

}
mediaN()