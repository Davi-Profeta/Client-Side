let codigo = parseInt(window.prompt("Escolha um produto pelo código:\n101 - Hambúrguer\n102 - Batata Frita\n103 - Refrigerante"));

switch (codigo) {
    case 101:
        window.alert("Produto: Hambúrguer\nPreço: R$ 15,00");
        break;
    case 102:
        window.alert("Produto: Batata Frita\nPreço: R$ 8,00");
        break;
    case 103:
        window.alert("Produto: Refrigerante\nPreço: R$ 5,00");
        break;
    default:
        window.alert("Código de produto inválido!");
}