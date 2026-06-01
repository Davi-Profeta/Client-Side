let opcao = parseInt(window.prompt("Escolha a conversão:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius\n3 - Celsius para Kelvin"));
let tempOriginal, tempConvertida;

switch (opcao) {
    case 1:
        tempOriginal = parseFloat(window.prompt("Digite a temperatura em Celsius:"));
        tempConvertida = (tempOriginal * 9/5) + 32;
        window.alert(`${tempOriginal}°C equivale a ${tempConvertida.toFixed(1)}°F`);
        break;
    case 2:
        tempOriginal = parseFloat(window.prompt("Digite a temperatura em Fahrenheit:"));
        tempConvertida = (tempOriginal - 32) * 5/9;
        window.alert(`${tempOriginal}°F equivale a ${tempConvertida.toFixed(1)}°C`);
        break;
    case 3:
        tempOriginal = parseFloat(window.prompt("Digite a temperatura em Celsius:"));
        tempConvertida = tempOriginal + 273.15;
        window.alert(`${tempOriginal}°C equivale a ${tempConvertida.toFixed(2)}K`);
        break;
    default:
        window.alert("Opção de conversão inválida!");
}