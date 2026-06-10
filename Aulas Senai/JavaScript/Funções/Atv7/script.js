// Crie uma função que receba três notas (double) e retorne a média.
function double(n1,n2,n3){

    return (n1+n2+n3) / 3

}

let num1 = Number(window.prompt(`Digite um número`))
let num2 = Number(window.prompt(`Digite outro número`))
let num3 = Number(window.prompt(`Digite mais um número`))
let media = double(num1, num2, num3)


window.alert(`A média deu ${media}`)