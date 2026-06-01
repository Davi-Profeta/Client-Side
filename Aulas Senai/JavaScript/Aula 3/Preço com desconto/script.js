let precoOriginal = parseFloat(window.prompt("Digite o valor do produto:"));

let desconto = precoOriginal * 0.10;
let precoFinal = precoOriginal - desconto;

window.alert("Preço com 10% de desconto: R$ " + precoFinal.toFixed(2));