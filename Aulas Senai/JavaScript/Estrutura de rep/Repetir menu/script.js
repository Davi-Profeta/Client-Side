/* Simule um menu com 3 opções (1 - Iniciar, 2 - Ajuda, 3 - Sair). 
Use do-while para continuar mostrando o menu até o usuário escolher a opção 3. */
let num
do{
    num = Number(window.prompt(`Escolha uma opção: 
    1 - Iniciar 
    2 - Ajuda 
    3 - Sair`))
} while(num != 3)