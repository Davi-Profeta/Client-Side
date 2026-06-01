let num1 = Number(window.prompt("Digite um número para soma com 10"))
let soma = num1 + 10

if(soma > 0){
    window.alert(`Positivo, seu número deu ${soma}`)
}
else if(soma < 0){
    window.alert(`Negativo, seu número deu ${soma}`)
}
else{
    window.alert(`Seu número deu ${soma}`)
}
