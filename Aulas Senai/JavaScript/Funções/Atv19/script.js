/* Receba peso (kg) e altura (m) e retorne o IMC.
Fórmula: IMC = peso / (altura2) */
function IMC(altura , peso){

    let imc = 0
    imc = peso / (altura*altura)
    
    return imc.toFixed(2)

}

console.log(IMC(1.85, 78))