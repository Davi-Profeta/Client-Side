let evento1 = document.getElementById("btn1")
evento1.addEventListener("click",exibir)

let evento2 = document.getElementById("btn2")
evento2.addEventListener("dblclick",dbc)

function exibir(){
    window.alert("Você clicou")
}
function dbc(){
    window.alert("Você clicou 2 vezes")
}