// Ler 5 números inteiros e mostrar os valores na ordem inversa da que foram digitados.
let num = []

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt(`Digite o número ${i+1}`))
}

num.reverse()
for(let i=0 ; i<5 ; i++){
    window.alert(num[i])
}

