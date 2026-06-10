/* Crie uma função que receba um número n e retorne quantos números pares existem
de 1 até n. */
function pares(num){

    let contador = 0

    for(let i=0; i<num ; i++){
        if(i % 2 == 0){
            contador++
        }
    }

    return contador

}
console.log(pares(20))