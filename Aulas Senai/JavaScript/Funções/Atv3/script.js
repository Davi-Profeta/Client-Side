// Crie uma função que receba dois números inteiros e retorne a subtração (a - b).
function subtracao(n1,n2){

    return n1-n2

}

let num1 = Number(window.prompt(`Digite um número para a subtração`))
let num2 = Number(window.prompt(`Digite outro número para a subtração`))

let total = subtracao(num1,num2)

window.alert(`A subtração deu ${total}`)