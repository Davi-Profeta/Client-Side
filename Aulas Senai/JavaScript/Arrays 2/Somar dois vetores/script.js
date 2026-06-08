/* Ler dois vetores de 5 posições cada (valores inteiros) e criar um terceiro vetor com a
soma dos elementos correspondentes. Mostrar o vetor resultante. */
let arrayOne = []
let arrayTwo = []
let arrayTotal = []

window.alert("Array 1")
for(let i=0; i<5 ; i++){
    arrayOne[i] = Number(window.prompt("Digite os números do primeiro vetor:"))
}

window.alert("Array 2")
for(let i=0; i<5 ; i++){
    arrayTwo[i] = Number(window.prompt("Digite os números do segundo vetor:"))
}

for(let i=0; i<arrayOne.length ; i++){
    arrayTotal[i] = arrayOne[i] + arrayTwo[i]
}

window.alert("A soma dos vetores foram:")
for(let i=0; i<5 ; i++){
    window.alert(`Vetor ${i + 1}: ${arrayTotal[i]}`)
}

