/* Peça ao usuário para digitar vários números (parando com zero). 
Conte quantos números negativos foram digitados. */
let num;
let neg = 0
while(num != 0){
    num = Number(window.prompt("Digite várias números (0 para parar)"))
    if(num < 0){
        neg++
    }
}
window.alert(`Foram ${neg} números negativos`)