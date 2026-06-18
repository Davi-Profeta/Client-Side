let obj1 = document.getElementById("obj1")
let obj2 = document.getElementById("obj2")
let obj3 = document.getElementById("obj3")
let btn = document.getElementById("mode")


btn.addEventListener("click",clicou)

function clicou(){
    obj1.style.backgroundColor = "red"
    obj2.style.backgroundColor = "green"
    obj3.style.backgroundColor = "blue"
}
