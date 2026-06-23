let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("photo")

btn1.addEventListener("click", function(){
    p.addEventListener("click",ativar)
})

function ativar(){
    window.alert("BURROOOOO")
}

btn2.addEventListener("click",remover)
function remover(){
    p.removeEventListener("click", ativar);
}