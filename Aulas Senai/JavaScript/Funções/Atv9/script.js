// Crie uma função que receba um número e imprima a tabuada dele de 1 a 10.
function tabuada(n){

    let mensagem = ""

    for(let i=1; i<=10 ; i++){
        mensagem += `${n} X ${i} = ${n*i}\n`
    }

    return mensagem

}

let num1 = Number(window.prompt(`Digite um número para tabuada`))
let tabu = tabuada(num1)

window.alert(tabu)