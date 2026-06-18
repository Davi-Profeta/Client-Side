let obj = document.getElementById("obj1")
let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let mudou = false //Verificador

btn1.addEventListener("click",clicou1)
btn2.addEventListener("click",clicou2)

function clicou1(){
    obj.style.backgroundColor = "blue"  
}

function clicou2(){
    obj.style.backgroundColor = "pink"  
}








