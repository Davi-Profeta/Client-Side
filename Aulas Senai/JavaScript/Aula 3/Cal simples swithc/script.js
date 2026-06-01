let num1 = parseFloat(window.prompt("Digite o primeiro número:"));
let num2 = parseFloat(window.prompt("Digite o segundo número:"));
let operacao = parseInt(window.prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));

let resultado;

switch (operacao) {
    case 1:
        resultado = num1 + num2;
        window.alert(`Resultado da Soma: ${resultado}`);
        break;
    case 2:
        resultado = num1 - num2;
        window.alert(`Resultado da Subtração: ${resultado}`);
        break;
    case 3:
        resultado = num1 * num2;
        window.alert(`Resultado da Multiplicação: ${resultado}`);
        break;
    case 4:
        if (num2 !== 0) {
            resultado = num1 / num2;
            window.alert(`Resultado da Divisão: ${resultado}`);
        } else {
            window.alert("Erro: Não é possível dividir por zero.");
        }
        break;
    default:
        window.alert("Operação inválida!");
}