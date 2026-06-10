/* Crie uma função que receba o nome de uma pessoa e exiba: “Olá, [nome]!” */
function n(name){

    return `Olá, ${name}`

}

let nome = window.prompt(`Digite seu nome`)
let nomes = n(nome)
window.alert(nomes)