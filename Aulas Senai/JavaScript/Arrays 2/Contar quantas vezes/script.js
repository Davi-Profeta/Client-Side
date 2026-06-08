/* Ler 5 números inteiros e perguntar ao usuário um número. Mostrar quantas vezes esse
número aparece no vetor. */
let num1 = []

for(let i=0; i<5 ; i++){
   num1[i] = Number(window.prompt("Números inteiros"))
}

let num2 = Number(window.prompt("Me diga um número que colocou no vetor"))
let contador = 0

for(let i=0; i<5 ; i++){
    if(num2 == num1[i]){
        contador++
    }
}

window.alert(`Esse número apareceu ${contador} vezes`)

