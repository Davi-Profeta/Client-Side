let num1 = Number(window.prompt("Digite um número"))

if(num1 % 3 == 0 && num1 % 5 == 0 ){
    window.alert(`Seu numero é divisivel por 3 e por 5`)
}
else if (num1 % 3 == 0){
    window.alert(`Seu número é divisivel por 3`)
}
else if (num1 % 5 == 0){
    window.alert(`Seu número é divisivel por 5`)
}
else{
    window.alert(`Seu número não é divisivel nem por 3 e nem por 5`)
}