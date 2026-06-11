/* Receba três números e retorne o menor entre eles. */
function menor(n1,n2,n3){

    let menos = n1
    if(menos > n2){
        menos = n2
    }

    if(menos > n3){
        menos = n3
    }

    return menos

}

console.log(menor(30,100,400))