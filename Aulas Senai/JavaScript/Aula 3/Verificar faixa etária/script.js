/* Peça a idade da pessoa e classifique:
● Criança: até 12 anos
● Adolescente: 13 a 17
● Adulto: 18 a 59
● Idoso: 60+ */
let idade = Number(window.prompt("Qual sua idade?"))

if(idade <= 0 ){
    window.alert("Me ajuda aí, coloque sua idade de verdade")
}
else if(idade <= 12){
    window.alert("Criança")
}
else if(idade < 18){
    window.alert("Adolescente")
}
else if(idade < 60){
    window.alert("Adulto")
}
else if(idade <= 120) {
    window.alert("Idoso")
}
else{
    window.alert("Só os ossos")
}