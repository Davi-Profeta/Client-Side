let dia = parseInt(window.prompt("Digite um número de 1 a 7:"));

switch (dia) {
    case 1: window.alert("Domingo"); break;
    case 2: window.alert("Segunda-feira"); break;
    case 3: window.alert("Terça-feira"); break;
    case 4: window.alert("Quarta-feira"); break;
    case 5: window.alert("Quinta-feira"); break;
    case 6: window.alert("Sexta-feira"); break;
    case 7: window.alert("Sábado"); break;
    default: window.alert("Número inválido! Digite um valor entre 1 e 7.");
}