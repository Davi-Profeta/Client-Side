// Ler 5 nomes e mostrar todos os nomes na ordem em que foram digitados.
let nome = []

for(let i=0 ; i<5 ; i++){
    nome[i] = window.prompt(`Qual seu ${i+1} nome?`)
}

for(let i=0 ; i<5 ; i++){
    window.alert(nome[i])
}

