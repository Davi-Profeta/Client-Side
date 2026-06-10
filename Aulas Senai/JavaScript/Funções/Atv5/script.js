/* Crie uma função que receba um número inteiro e retorne true se for par, e false se
for ímpar. */
function condicao(n1){

    if(n1 % 2 == 0){
        return true
    }
    else{
        return false
    }

}

let num = Number(window.prompt(`Digite um número`))
let total = condicao(num)

window.alert(`${total}`)