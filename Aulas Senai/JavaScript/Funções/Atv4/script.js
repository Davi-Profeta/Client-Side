//Crie uma função que receba um número inteiro e retorne o dobro dele.
function dobro(n1){

    return n1*2

}

let num = Number(window.prompt(`Digite um número`))

let total = dobro(num)

window.alert(`O dobro de ${num} é ${total}`)