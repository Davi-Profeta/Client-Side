let num1 = parseFloat(window.prompt("Digite o primeiro número:"));
let num2 = parseFloat(window.prompt("Digite o segundo número:"));

if (num1 > 0 && num2 > 0) {
    let soma = num1 + num2;
    window.alert("A soma dos números é: " + soma);
} else {
    window.alert("A soma não será feita porque um ou ambos os números não são positivos.");
}