// Ler 5 números inteiros e mostrar as posições onde o número for negativo.
let num = []
let neg = []

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt("Digite os números"))
}

window.alert(`Aqui estão os negativos`)

for(let i=0 ; i<num.length ; i++){
    if(num[i] < 0){
        window.alert(`${[i]} = ${num[i]}`)
    }
}