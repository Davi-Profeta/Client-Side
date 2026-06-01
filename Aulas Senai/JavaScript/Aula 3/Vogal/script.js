function vogal() {
    let vogal = window.prompt("Digite uma vogal")
    if (vogal != "A" || "a" || "E" || "e" || "I" || "i" || "O" || "o" || "U" || "u") {
        window.alert("Erro, verifique os dados");
        return;
    }
    else{
        window.alert("É uma vogal")
    }
}
vogal();
