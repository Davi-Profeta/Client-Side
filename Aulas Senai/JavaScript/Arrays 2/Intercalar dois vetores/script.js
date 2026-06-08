/* Ler dois vetores de 5 posições cada e criar um terceiro vetor com os elementos
intercalados (ex: A[0], B[0], A[1], B[1], ...). Mostrar o vetor resultante. */
let arrayOne = []
let arrayTwo = []
let arrayInter = []

window.alert("Array 1")
for(let i=0; i<5 ; i++){
    arrayOne[i] = Number(window.prompt("Digite os números do primeiro vetor:"))
}

window.alert("Array 2")
for(let i=0; i<5 ; i++){
    arrayTwo[i] = Number(window.prompt("Digite os números do segundo vetor:"))
}

for(let i=0; i<5 ; i++){
    arrayInter.push(arrayOne[i])
    arrayInter.push(arrayTwo[i])
}
window.alert(arrayInter)