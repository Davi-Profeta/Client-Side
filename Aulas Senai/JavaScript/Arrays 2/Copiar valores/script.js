/* Ler 5 números inteiros e copiar apenas os valores pares para um segundo vetor.
Mostrar esse novo vetor. */
let num1 = []
let pares = []

for(let i=0; i<5 ; i++){
    num1[i] = Number(window.prompt("Digite um número"))
    if(num1[i] % 2 == 0){
        pares.push(num1[i])
    }
}

window.alert("Os números pares foram...")
for(let i=0; i<pares[i] ; i++){
    window.alert(pares[i])
}
