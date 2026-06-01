//Peça dois números e diga se o primeiro é múltiplo do segundo.
let num1 = Number(window.prompt("Digite um número"))
let num2 = Number(window.prompt("Digite outro número"))

if(num1 % num2 === 0){
    window.alert(`O número ${num1} é divisivel por ${num2}`)
}
else{
    window.alert(`O número ${num1} não é divisivel por ${num2}`)
}