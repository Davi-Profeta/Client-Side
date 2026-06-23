
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
let p = document.getElementById("ativo")
let Listanames = []
const inputName = document.getElementById("name");
const clique = document.getElementById("submit")
let list = document.getElementById("ul")

btn1.addEventListener("click", cadastro)

function cadastro() {
    p.innerText = "Cadastro Ativado!";
    p.style.color = "green"
    clique.addEventListener("click", nomes)
}

function nomes() {
    let nameValue = inputName.value

    if (nameValue === "") {
        window.alert("Digite um valor")
        return;
    }
    else {
        if (Listanames.length >= 5) {
            window.alert("Passou do limite")
            desativar()
            return;
        }

        Listanames.push(nameValue)
        inputName.value = ""

        let li = document.createElement('li')
        li.textContent = nameValue
        list.appendChild(li)
        
    }
}

function desativar(){
    clique.removeEventListener("click", nomes);
    p.innerText = "Cadastro Desativado!";
    p.style.color = "red";
}

btn2.addEventListener("click",desativar)

btn2.addEventListener("click", function () {
    clique.removeEventListener("click", nomes);
    p.innerText = "Cadastro Desativado!";
    p.style.color = "red";
})