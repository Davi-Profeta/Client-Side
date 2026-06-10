// Crie uma função que receba dois números inteiros e retorne a soma deles.
function soma(n1,n2){

    return n1+n2

}

let num1 = Number(window.prompt(`Digite um número para a soma`))
let num2 = Number(window.prompt(`Digite outro número para a soma`))

let total = soma(num1,num2)

window.alert(`A soma deu ${total}`)