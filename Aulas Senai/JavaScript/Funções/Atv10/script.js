// Crie uma função que receba um número inteiro e retorne o fatorial dele.
function fatorial(num){

    let total = 1

    for(let i=1; i<num ; i++){
        total = total * i
        console.log(`${total}`)
    }

}
fatorial(6)
