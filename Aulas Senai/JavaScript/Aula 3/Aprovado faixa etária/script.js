let idade = parseInt(window.prompt("Digite a sua idade:"));

switch (true) {
    case (idade >= 0 && idade <= 12):
        window.alert("Classificação: Criança");
        break;
    case (idade >= 13 && idade <= 17):
        window.alert("Classificação: Adolescente");
        break;
    case (idade >= 18 && idade <= 59):
        window.alert("Classificação: Adulto");
        break;
    case (idade >= 60):
        window.alert("Classificação: Idoso");
        break;
    default:
        window.alert("Idade inválida!");
}