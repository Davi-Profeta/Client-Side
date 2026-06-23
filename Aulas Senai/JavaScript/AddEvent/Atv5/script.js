let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let p = document.getElementById("text")
let contador = 0
const palavras = ["gato", "programou", "computador", "café", "javascript", "rápido", "tela", "código"];

btn1.addEventListener("click",ativar)
function ativar(){
   if(contador < palavras.length){
    p.innerText = palavras[contador]
    contador ++
   }
   else{
    contador = 0
    p.innerText = palavras[contador]
   }
}

btn2.addEventListener("click",remover)
function remover(){
    btn1.removeEventListener("click", ativar);
    p.innerText = ""
}