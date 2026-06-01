/*Solicite ao usuário três lados e verifique se é possível formar um triângulo
com eles. Para ser triângulo, a soma de dois lados deve ser sempre maior que o
terceiro lado.*/
let l1 = Number(window.prompt("Lado 1"))
let l2 = Number(window.prompt("Lado 2"))
let l3 = Number(window.prompt("Lado 3"))

if (l1 + l2 > l3){
    window.alert("É possivel formar um triângulo")
}
else{
    window.alert("Não é possivel formar um triângulo")
}