// Ler 5 números e imprimir apenas os que forem maiores que 10.
let num = []

for(let i=0 ; i<5 ; i++){
    num[i] = Number(window.prompt("Digite um número"))
}

for(let i=0 ; i<5 ; i++){
    if(num[i] > 10){
        window.alert(num[i])
    }
}





