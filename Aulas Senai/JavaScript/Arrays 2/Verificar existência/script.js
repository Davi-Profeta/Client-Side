/* Ler 5 números inteiros e perguntar ao usuário um número. Verificar se esse número
está no vetor e mostrar uma mensagem informando se foi encontrado ou não. */
let num = []

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o ${i}° número`))
}

window.prompt("Digite um número para ver se tem no vetor")
