// Armazenar
let names = [];
let nome;
const btn = document.getElementById("btn");
btn.addEventListener("click",adicionar);

function adicionar(){
    nome = document.getElementById("name").value
    names.push(nome);
    localStorage.setItem("Arrays", JSON.stringify(names));
    document.getElementById("name").value = ""; // limpa o input

    nomesAparecendo(nome);

}

function nomesAparecendo(nome){
    let div = document.getElementById("div");

    let text = document.createElement("li");
    text.innerText = nome;

    div.appendChild(text);
}

// Atualizar
window.onload = function(){
    let nomeSalvos = JSON.parse(localStorage.getItem("Array"))
    console.log(nomeSalvos);
    
    if(nomeSalvos !== null){return}
    else{

        for(let i=0; i<nomeSalvos.lenght ; i++){
            let div = document.getElementById("div");
            let text = document.createElement("li");
            text.innerText = nomeSalvos[i];

            div.appendChild(text);
        }

    }
}

