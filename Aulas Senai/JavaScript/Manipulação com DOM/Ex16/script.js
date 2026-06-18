let obj = document.getElementById("obj1")
let corpo = document.getElementById("body")
let para = document.getElementById("paragrafo")
let btn = document.getElementById("mode")
let mode = false

btn.addEventListener("click",clicou)

function clicou(){
    if(!mode){
        obj.style.backgroundColor = "black"
        corpo.style.backgroundColor = "black"
        para.style.color = "white"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        mode = true
    }
    else{
        obj.style.backgroundColor = "white"
        corpo.style.backgroundColor = "white"
        para.style.color = "black"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        mode = false
    }
}
