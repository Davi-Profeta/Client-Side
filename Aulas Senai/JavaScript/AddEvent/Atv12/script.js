let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("text")
let clique = [];

btn1.addEventListener("click", function(){
    btn1.innerText = "Adicionar clique"
    btn1.addEventListener("click",ativar)
})
function ativar(){
    clique.push(btn1)
    p.innerText = "Clique salvo!, " + clique.length
}

btn2.addEventListener("click",remover)
function remover(){
    btn1.removeEventListener("click", ativar);
    p.innerText = "Ativar Registro"
}