let obj = document.getElementById("obj1")
let mudou = false //Verificador
addEventListener("click",clicou)

function clicou(){
    if(!mudou){
        obj.style.backgroundColor = "blue"
        mudou = true
    }
    else{
        obj.style.backgroundColor = "gray"
        mudou = false
    }
    
    
}






