/* Crie uma função que receba um número n e retorne a soma de 1 até n, usando um
laço for. */
function somas(num){

    let total = 0

    for(let i=1; i<=num ; i++){
        total = total + i
    }

    return total

}

console.log(somas(10))
