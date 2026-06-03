/* Preencher automaticamente um vetor de 5 posições, onde cada posição recebe
o valor do índice multiplicado por 2, e depois mostrar o vetor. */
let num = [100,200,300,400,500]
let mult = []

for(let i=0 ; i<num.length ; i++){
    mult[i] = num[i] * 2
}

window.alert("Valores preenchidos automaticamente")
for(let i=0 ; i<num.length ; i++){
    window.alert(mult[i])
}
