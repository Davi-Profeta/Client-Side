const emoji = document.getElementById("emoji");
        const botaoAtivar = document.getElementById("botaoAtivar");
        const botaoRemover = document.getElementById("botaoRemover");

        const listaEmojis = ["😀", "😂", "😍", "😎", "😢", "😡", "🤔", "🥳"];

        function trocarEmoji() {
            const indiceAleatorio = Math.floor(Math.random() * listaEmojis.length);
            emoji.innerText = listaEmojis[indiceAleatorio];
        }

        botaoAtivar.addEventListener("click", function () {
            emoji.addEventListener("click", trocarEmoji);
        });

        botaoRemover.addEventListener("click", function () {
            emoji.removeEventListener("click", trocarEmoji);
});