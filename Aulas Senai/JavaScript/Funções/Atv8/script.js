/* Crie uma função que receba dois números inteiros e retorne o maior entre eles. */
function maior(n1,n2){

    if(n1 > n2){
        return `O ${n1} é maior`
    }
    else{
        return `O ${n2} é maior`
    }

}

let num1 = Number(window.prompt(`Digite um número`))
let num2 = Number(window.prompt(`Digite outro número`))
let big = maior(num1, num2)

window.alert(big)