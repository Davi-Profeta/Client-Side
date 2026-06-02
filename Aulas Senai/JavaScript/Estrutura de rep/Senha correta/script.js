/*Crie um programa que continue pedindo ao usuário para digitar uma senha até que ele 
digite o valor correto  (por exemplo, 1234). Quando a senha correta for digitada, exiba "Acesso permitido". */
let senhaC = Number(window.prompt("Crie uma senha só com números"))
let senha = 0

do{
    senha = Number(window.prompt("Qual sua senha"))

    if (senha != senhaC) {
        window.alert("Acesso negado! Tente novamente.");
    }

} while (senhaC != senha)

window.alert("Acesso permitido")