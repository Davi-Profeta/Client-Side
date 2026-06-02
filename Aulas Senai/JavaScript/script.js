/* Crie um programa que percorra os números de 1 a 100 e 
conte quantos são divisíveis por 7. Exiba o total no final. */
let contator = 0

for(let i=1 ; i<=100 ; i++){
    if(i % 7 == 0){
        window.alert(`${i} é divisivel por 7`)
        contator++
    }
}
window.alert(`Foram ${contator} números divisiveis`)