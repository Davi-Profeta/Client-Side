/* Ler 5 números inteiros, identificar o maior e o menor valor e mostrar a diferença entre
eles. */
let num = []

num[0] = Number(window.prompt(`Digite o número 1`))

let maior = num[0]
let menor = num[0]

for(let i=1; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o número ${i+1}`))

    if (num[i] >= maior) {
        maior = num[i];
    }
    if (num[i] <= menor) {
            menor = num[i];
    }

}
window.alert(`Maior número: ${maior} \n
Menor número: ${menor}`)
window.alert(`A diferença entre ele é de ${maior-menor}`)


