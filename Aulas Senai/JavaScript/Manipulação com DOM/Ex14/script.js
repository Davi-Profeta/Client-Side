let obj = document.getElementById("obj1")
let mudou = false //Verificador
addEventListener("click",clicou)

function clicou(){
    if(!mudou){
        obj.style.backgroundColor = "green"
        mudou = true
    }
    else{
        obj.style.backgroundColor = "red"
        mudou = false
    }
    
    
}






