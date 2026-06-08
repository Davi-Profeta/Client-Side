/* Ler 5 números inteiros e verificar se estão em ordem crescente. Mostrar uma
mensagem confirmando ou não. */
let num1 = []
let crescente = true

for(let i=0; i<5 ; i++){
    num1[i] = Number(window.prompt("Digite para ordem"))
}

for(let i=0; i<num1.length ; i++){
    if(num1[i] > num1[i + 1]){
        crescente = false
        break;
    }
}

if(crescente == true){
    window.alert("Seus números estão em ordem crescente")
}
else{
    window.alert("Seus números não estão em ordem crescente")
}