function executarCalculadora(){
let num1 = Number(window.prompt("Digite um número"))
let ope = window.prompt("Qual operação deseja")

if (ope !== "+" && ope !== "-" && ope !== "*" && ope !== "/") {
    window.alert("Verifique seu operador");
    return;
} 

let num2 = Number(window.prompt("Digite outro número"));


if(ope === "+"){
    window.alert(`Seu resultado é ${num1 + num2}`)
}
else if(ope === "-"){
    window.alert(`Seu resultado é ${num1 - num2}`)
}
else if(ope === "*"){
    window.alert(`Seu resultado é ${num1 * num2}`)
}
else if(ope === "/"){
    window.alert(`Seu resultado é ${num1 / num2}`)
}


}
executarCalculadora();
